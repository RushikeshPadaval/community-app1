# community-app

# 🌐 Mini LinkedIn-like Community Platform

This is a full-stack web application built as part of a coding challenge for the Full Stack Development Internship at **CIAAN Cyber Tech Pvt Ltd**.

It allows users to register, log in, post updates, and view user profiles in a social feed—similar to a simplified version of LinkedIn.

---

## 🚀 Live Demo

🔗 [Live URL (Render)](https://community-app1-client.onrender.com/)

----

## 🧰 Tech Stack

| Layer       | Technology            |
|-------------|------------------------|
| Frontend    | React.js + React Router + Bootstrap |
| Backend     | Node.js + Express       |
| Database    | MongoDB (Mongoose)      |
| Auth        | JWT + bcryptjs          |
| Hosting     | Render (Frontend), Render (Backend) |

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

2. Setup Server


Create a .env file with the following in server

JWT_SECRET=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30
MONGO_URI=mongodb+srv://rushikeshpadaval:9011816349@cluster0.x99bt3y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

cd server
npm install
node index.js

Then:
3. Setup Frontend


cd ../client


npm install
npm start

My request dont use Brave Browser Use edge or chrome
