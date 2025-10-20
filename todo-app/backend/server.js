import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../frontend')));

// Request logging middleware
app.use((req, res, next) => {
  if (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE') {
    console.log(`${req.method} ${req.path} - Body:`, req.body);
  }
  next();
});

// In-memory database for todos
let todos = [
  { id: 1, title: 'Learn htmx', completed: false },
  { id: 2, title: 'Build a Todo App', completed: false },
  { id: 3, title: 'Master Express.js', completed: true }
];

let nextId = 4;

// Helper function to render todo item as HTML
function renderTodoItem(todo) {
  const checkbox = `
    <input 
      type="checkbox" 
      ${todo.completed ? 'checked' : ''} 
      hx-put="/api/todos/${todo.id}" 
      hx-include="this" 
      hx-target="closest .todo-item"
      hx-swap="outerHTML"
      name="completed"
      value="on"
    >
  `;

  const deleteBtn = `
    <button 
      class="btn-small" 
      hx-delete="/api/todos/${todo.id}" 
      hx-target="closest .todo-item"
      hx-swap="outerHTML swap:1s"
      hx-confirm="Are you sure?"
    >
      Delete
    </button>
  `;

  return `
    <li class="todo-item ${todo.completed ? 'completed' : ''}">
      ${checkbox}
      <span class="todo-title">${escapeHtml(todo.title)}</span>
      <div class="todo-actions">
        ${deleteBtn}
      </div>
    </li>
  `;
}

// Helper function to escape HTML
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Routes

// Get all todos (HTML response for htmx)
app.get('/todos', (req, res) => {
  const html = todos.length === 0 
    ? '<div class="empty-state"><p>No todos yet. Add one to get started! 🚀</p></div>'
    : todos.map(renderTodoItem).join('');
  res.send(html);
});

// API: Get all todos (JSON)
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// API: Get single todo by ID
app.get('/api/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: 'Todo not found' });
  res.json(todo);
});

// Create a new todo (HTML response for htmx)
app.post('/todos', (req, res) => {
  // htmx sends form data with input id as key
  const title = req.body.todoInput?.trim();
  
  if (!title) {
    return res.status(400).send('<p style="color: red;">Title is required</p>');
  }

  const newTodo = {
    id: nextId++,
    title: title,
    completed: false
  };

  todos.push(newTodo);
  res.status(201).send(renderTodoItem(newTodo));
});

// API: Create a new todo (JSON)
app.post('/api/todos', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  const newTodo = {
    id: nextId++,
    title,
    completed: false
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a todo (HTML response for htmx)
app.put('/api/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send('Todo not found');

  // Handle form data from htmx
  if (req.body.completed !== undefined) {
    todo.completed = req.body.completed === 'on' || req.body.completed === true;
  }
  if (req.body.title) {
    todo.title = req.body.title;
  }

  res.send(renderTodoItem(todo));
});

// Delete a todo (HTML response for htmx)
app.delete('/api/todos/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Todo not found');

  todos.splice(index, 1);
  res.send('');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Todo API running at http://localhost:${PORT}`);
  console.log(`📝 API endpoints:`);
  console.log(`   GET    /api/todos        - Get all todos`);
  console.log(`   GET    /api/todos/:id    - Get single todo`);
  console.log(`   POST   /api/todos        - Create new todo`);
  console.log(`   PUT    /api/todos/:id    - Update todo`);
  console.log(`   DELETE /api/todos/:id    - Delete todo`);
});
