const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory task storage (replace with database in production)
let tasks = [];

// GET endpoint to fetch all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// POST endpoint to add a new task
app.post('/api/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Task title is required' });
  }

  const newTask = {
    id: Date.now(),
    title,
    completed: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// DELETE endpoint to remove a task
app.delete('/api/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = tasks.length;
  
  tasks = tasks.filter(task => task.id !== id);
  
  if (tasks.length === initialLength) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  res.status(200).json({ message: 'Task deleted successfully' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});