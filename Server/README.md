# Fullstack Project (MERN Stack)

This project is a **Fullstack MERN Application** with a structured workflow for both backend (Express.js + MongoDB) and frontend (React + Vite). It includes session-based authentication, role-based login, and persistent session management.

---

## 📂 Project Structure

```
project-root/
│
├── backend/                  # Express.js + MongoDB backend
│   ├── config/               # Configuration files (MongoDB, session, etc.)
│   │   └── db.js
│   │
│   ├── middleware/           # Custom middlewares
│   │   └── auth.middleware.js
│   │
│   ├── models/               # MongoDB models
│   │   ├── user.model.js
│   │   └── session.model.js (optional)
│   │
│   ├── routes/               # Express routes
│   │   ├── auth.routes.js
│   │   └── admin.routes.js
│   │
│   ├── utils/                # Utility functions
│   │   └── response.utils.js
│   │
│   ├── .env                  # Environment variables (MONGO_URI, SESSION_SECRET, PORT, etc.)
│   ├── app.js                 # Express app setup
│   └── server.js              # Entry point for backend
│
│
├── frontend/                 # React (Vite) frontend
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Pages (Login, Signup, Admin, etc.)
│   │   ├── context/          # React Context for global state (AuthContext)
│   │   ├── hooks/            # Custom hooks
│   │   ├── App.jsx           # Main App
│   │   ├── main.jsx          # React entry point
│   │   └── api/              # API calls (Axios)
│   │
│   ├── public/               # Public assets
│   └── vite.config.js        # Vite config file
│
├── README.md                 # Documentation
└── package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/project-name.git
cd project-name
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a **.env** file in backend folder:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/mydatabase
SESSION_SECRET=mysecretkey
```

Run backend with nodemon:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Start frontend:

```bash
npm run dev
```

Frontend will run on **[http://localhost:5173](http://localhost:5173)** (Vite default) and backend on **[http://localhost:5000](http://localhost:5000)**.

---

## 🚀 Workflow

### 🔹 Backend Workflow

1. **Database Connection** → Setup MongoDB in `config/db.js` using Mongoose.
2. **Models** → Define User schema (`models/user.model.js`).
3. **Routes** → Create `auth.routes.js` for login/signup, and `admin.routes.js` for admin APIs.
4. **Session Middleware** → Configure `express-session` in `app.js`.
5. **Role-based Access** → Middleware (`auth.middleware.js`) to allow only admin users.
6. **Response Utils** → Standard response format (`utils/response.utils.js`).
7. **Server Start** → Run backend with `server.js`.

### 🔹 Frontend Workflow

1. **Routing** → Use React Router for navigation (Login, Signup, AdminPanel).
2. **Auth Context** → Manage login state globally using React Context API.
3. **API Calls** → Create Axios instance in `api/axios.js` to interact with backend.
4. **Session Persistence** → Store session cookies, auto-check session on refresh.
5. **Protected Routes** → Restrict access to AdminPanel unless logged in.
6. **UI Components** → Build reusable components (Navbar, Forms, Dashboard).

---

## 📌 Features

* User Signup & Login (with session persistence)
* Admin-only access using pre-saved credentials
* Role-based authentication (Admin/User)
* MongoDB database connection
* Session stored in cookies (via express-session)
* Frontend: React + Vite + TailwindCSS
* Backend: Express + MongoDB + Mongoose

---

## 🛠️ Scripts

### Backend (`backend/package.json`)

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

### Frontend (`frontend/package.json`)

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

---

## 🔮 Future Improvements

* JWT-based authentication (optional)
* Deployment (Render/Netlify/Vercel)
* Docker support for backend + frontend
* Unit tests for routes and components

---

## 📖 How to Write Code

### Example Backend Route (`auth.routes.js`)

```js
import express from "express";
import { loginUser, signupUser } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);

export default router;
```

### Example Frontend API Call (`api/auth.js`)

```js
import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const loginUser = (data) => API.post("/auth/login", data);
export const signupUser = (data) => API.post("/auth/signup", data);
```

### Example Auth Context (`context/AuthContext.jsx`)

```jsx
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Auto check session when app loads
    fetch("http://localhost:5000/api/auth/check-session", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setUser(data.user || null));
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
```

---

## 📌 Conclusion

This project provides a **complete MERN stack workflow** with session-based authentication and role-based access control. You can extend it with more features like JWT authentication, file uploads, or payments.

---

✍️ **Author:** Yogesh Kumar
