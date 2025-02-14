# Todo List Application

## Overview
A simple, responsive Todo List web application built with React frontend and Node.js/Express backend.

## Features
- Add new tasks
- Delete existing tasks
- Real-time task management
- Responsive design

## Prerequisites
- Node.js (v14+)
- npm

## Setup Instructions

### Backend
```bash
# Navigate to backend directory
cd backend
npm install
npm start
# Runs on http://localhost:5000
```

### Frontend
```bash
# Navigate to frontend directory
cd frontend
npm install
npm start
# Runs on http://localhost:3000
```

## Tech Stack
- Frontend: React, Axios, Tailwind CSS
- Backend: Node.js, Express.js

## API Endpoints
- `GET /api/tasks`: Retrieve all tasks
- `POST /api/tasks`: Create a new task
- `DELETE /api/tasks/:id`: Delete a specific task

## Future Improvements
- Persistent database integration
- Task completion toggle
- User authentication