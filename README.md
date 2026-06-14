# 🚀 SaaS Billing Portal

A full‑stack **MERN SaaS Billing Dashboard** with role‑based authentication, subscription management, and a modern UI.  
Built for learning, hackathons, and professional portfolio demos.

---

## 📑 Table of Contents
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Future Improvements](#-future-improvements)
- [Author](#-author)
- [License](#-license)

---

## ✨ Features
- 🔐 **Authentication**: Register/Login with JWT & bcrypt  
- 👥 **Role‑Based Access**: Owner, Admin, Analyst, Member  
- 💳 **Billing Management**: View subscriptions, plans, and payments  
- 🎨 **Modern UI**: Styled React pages (Login, Register, Dashboard, Billing)  
- 🗄️ **MongoDB Integration**: User & Subscription collections  
- ⚡ **REST API**: Express backend with clean routes  

---

## 📸 Screenshots

### 🔐 Login Page
<img width="1585" height="862" alt="Screenshot 2026-06-15 014155" src="https://github.com/user-attachments/assets/f34d6ae6-e6b9-4957-8367-06a1844b15a0" />

### 📝 Register Page
<img width="1212" height="843" alt="Screenshot 2026-06-15 014208" src="https://github.com/user-attachments/assets/650b506e-c583-4a1c-a950-5a0c8281f7f7" />

### 📊 Dashboard
<img width="1372" height="781" alt="Screenshot 2026-06-15 014225" src="https://github.com/user-attachments/assets/b8ac7ad5-756a-4eb0-9d43-e92f6592f85e" />

### 💳 Billing Page
<img width="1557" height="636" alt="Screenshot 2026-06-15 014615" src="https://github.com/user-attachments/assets/18665d49-6a14-49f6-961b-608d86099c43" />

*(Add your actual screenshots in the `assets/` folder and update paths.)*

---

## 🛠️ Tech Stack
- **Frontend**: React, Axios, CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (Compass / Atlas)  
- **Auth**: JWT, bcrypt  
- **Tools**: Nodemon, dotenv, cors  

---

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/saas-billing-portal.git
   cd saas-billing-portal

2. Backend Setup

   ```bash
     cd backend
     npm install
   
3.  Create .env file:

  env
  MONGO_URI=mongodb://127.0.0.1:27017/saas-billing
  JWT_SECRET=supersecretkey
  PORT=5000
  Start backend:

   ```bash
     npx nodemon server.js
     Frontend Setup

    ```bash
     cd ../frontend
     npm install
     npm start
---

## 📂 Project Structure

saas-billing-portal/
│── backend/
│   ├── config/db.js
│   ├── models/User.js
│   ├── models/Subscription.js
│   ├── routes/authRoutes.js
│   ├── routes/billingRoutes.js
│   ├── controllers/
│   └── server.js
│
│── frontend/
│   ├── src/components/
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── Dashboard.js
│   │   └── BillingPage.js
│   └── App.js
│
│── assets/ (screenshots)
│── README.md


👨‍💻 Author
Ronak Sharma

GitHub: ronaksharma2908 (github.com in Bing)

LinkedIn: https://linkedin.com/in/ronak29sharma

📜 License
This project is licensed under the MIT License – see the [Looks like the result wasn't safe to show. Let's switch things up and try something else!] file for details.

---



