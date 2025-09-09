# Blog App (MERN + Tailwind + Motion + Gemini API)

This is a MERN Stack Blog Application with an Admin Panel for creating and managing blogs. The app uses Tailwind CSS for styling, Framer Motion for animations, and Gemini API for generating blog content. Image handling is done via ImageKit.

---

## Features
- ✅ Create, Read, Update, and Delete Blogs
- ✅ Admin Panel for managing blogs
- ✅ Gemini API for blog content generation
- ✅ Image upload using ImageKit
- ✅ Responsive UI with Tailwind CSS and Motion animations

---

## Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <project-folder>


2. Install Dependencies

Navigate to server and client folders separately and run:

npm install

3. Create Environment Files

You need .env files in both server and client directories.

Server .env
JWT_SECRET = ''

# Admin Credentials
ADMIN_EMAIL = ''
ADMIN_PASSWORD = ''

# MongoDB Connection URL
MONGODB_URI = ''

# ImageKit Keys
IMAGEKIT_PUBLIC_KEY = ''
IMAGEKIT_PRIVATE_KEY = ''
IMAGEKIT_URL_ENDPOINT = ''

# Gemini API Key
GEMINI_API_KEY = ''


Replace all empty values with your actual credentials.

Client .env
VITE_BASE_URL = http://localhost:3000

4. Run the Application
Start the Server
npm run server

Start the Client
npm run dev

