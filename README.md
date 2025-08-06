# 🌐 Mini LinkedIn-like Community Platform

This is a full-stack web application built as part of a coding challenge for the Full Stack Development Internship at **CIAAN Cyber Tech Pvt Ltd**.

It allows users to register, log in, post updates, and view user profiles in a social feed—similar to a simplified version of LinkedIn.

---

## 🚀 Live Demo

🔗 [Live URL (Vercel/Render)](https://your-live-link.com)

---

## 📂 GitHub Repository

🔗 [GitHub Repo](https://github.com/your-username/community-app)

---

## 🧰 Tech Stack

| Layer       | Technology            |
|-------------|------------------------|
| Frontend    | React.js + React Router |
| Backend     | Node.js + Express       |
| Database    | MongoDB (Mongoose)      |
| Auth        | JWT + bcryptjs          |
| Hosting     | Vercel (Frontend), Render (Backend) |

---

## ✨ Features

### ✅ Authentication
- User registration & login (email & password)
- Secure password hashing using bcrypt
- JWT-based authentication
- Profile with name, email, and bio

### ✅ Public Post Feed
- Create and display posts
- Feed shows posts with author name & timestamp

### ✅ User Profile Page
- View profile info
- View posts made by that user

---

## 🛠️ Getting Started Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/community-app
cd community-app

2. Setup Backend

cd server
npm install
touch .env

Create a .env file with the following:
JWT_SECRET=your_jwt_secret_key
MONGO_URI=your_mongodb_connection_uri
Then:
3. Setup Frontend


cd ../client


npm install
npm start

