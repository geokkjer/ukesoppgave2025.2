# Todo App - htmx + Express.js

A simple, modern Todo application built with **htmx** (frontend) and **Express.js** (backend). This project demonstrates how to build interactive web applications with minimal JavaScript while maintaining a clean separation between frontend and backend.

## 🎯 Features

- ✅ Create new todos
- ✅ Mark todos as complete/incomplete
- ✅ Delete todos
- ✅ Real-time updates with htmx (no page refresh)
- ✅ Beautiful, responsive UI
- ✅ RESTful API endpoints

## 📁 Project Structure

```
todo-app/
├── backend/
│   ├── package.json
│   ├── server.js           # Express server with API routes
│   └── public/             # Static files
├── frontend/
│   ├── package.json
│   ├── index.html          # Main HTML with htmx
│   └── ...
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone/navigate to the project:**
   ```bash
   cd todo-app
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Return to project root:**
   ```bash
   cd ..
   ```

### Running the Application

#### Option 1: Using npm scripts

1. **Start the backend server:**
   ```bash
   cd backend
   npm run dev
   ```
   The backend will start on `http://localhost:3000`

2. **In a new terminal, start the frontend server:**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will be served at `http://localhost:8000`

3. **Open your browser and navigate to:**
   ```
   http://localhost:8000
   ```

#### Option 2: Direct commands

**Backend:**
```bash
cd backend
node server.js
```

**Frontend:**
```bash
cd frontend
python3 -m http.server 8000
```

## 📚 API Endpoints

### todos Endpoints (HTML Responses)

- `GET /todos` - Get all todos as HTML
- `POST /todos` - Create a new todo (returns HTML)
- `PUT /api/todos/:id` - Update a todo (returns HTML)
- `DELETE /api/todos/:id` - Delete a todo

### /api/todos Endpoints (JSON Responses)

- `GET /api/todos` - Get all todos as JSON
- `GET /api/todos/:id` - Get a specific todo
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

## 🛠️ How It Works

### Backend (Express.js)

The backend serves both the static frontend and provides API endpoints that return either HTML (for htmx requests) or JSON (for traditional API calls).

**Key features:**
- In-memory todo storage (todos reset on server restart)
- HTML rendering for todo items
- CORS enabled for cross-origin requests
- Body parsing for form and JSON data

### Frontend (htmx)

The frontend uses htmx to communicate with the backend without writing much JavaScript.

**Key htmx attributes:**
- `hx-get="/todos"` - Load todos on page load
- `hx-post="/todos"` - Create new todo on button click
- `hx-put="/api/todos/:id"` - Toggle todo completion
- `hx-delete="/api/todos/:id"` - Delete a todo

## 🎨 Technology Stack

| Component | Technology |
|-----------|------------|
| Backend | Express.js |
| Frontend | HTML5 + CSS3 |
| Interactivity | htmx 1.9.10 |
| HTTP Client | htmx (built-in) |
| Data Format | JSON + HTML |

## 📝 Example Usage

### Add a Todo

```html
<input type="text" id="todoInput" placeholder="Add a new todo..." />
<button hx-post="/todos" hx-include="#todoInput" hx-target="#todoList" hx-swap="beforeend">
  Add
</button>
```

The button sends a POST request to `/todos` with the input value. The backend responds with HTML of the new todo item, which is inserted at the end of the list.

### Toggle Todo Completion

```html
<input 
  type="checkbox" 
  hx-put="/api/todos/:id" 
  hx-target="closest .todo-item"
  hx-swap="outerHTML"
/>
```

Checking the box sends a PUT request to update the todo. The response replaces the entire todo item.

## 🔧 Customization

### Change Port

In `backend/server.js`, modify the `PORT` variable:
```javascript
const PORT = 3001; // Change from 3000 to 3001
```

### Add Persistence

To persist todos between server restarts, modify the backend to use:
- Local JSON file storage
- SQLite database
- PostgreSQL or MongoDB

### Styling

Edit `frontend/index.html` to customize:
- Colors (gradient colors in the CSS)
- Layout
- Fonts
- Animations

## 📚 Learning Resources

- [htmx Documentation](https://htmx.org)
- [Express.js Documentation](https://expressjs.com)
- [RESTful API Best Practices](https://restfulapi.net)

## 🤝 Contributing

Feel free to fork, modify, and extend this project!

## 📄 License

MIT License - feel free to use this project for learning or as a template for your own applications.

---

**Happy coding! 🎉**
