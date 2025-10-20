import './style.css'

// Allow Enter key to submit
document.getElementById('todoInput')?.addEventListener('keypress', function(e: KeyboardEvent) {
    if (e.key === 'Enter') {
        document.querySelector('button')?.click();
    }
});

console.log('✅ Todo App loaded with Vite + htmx');
