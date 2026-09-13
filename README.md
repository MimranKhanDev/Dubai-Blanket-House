# Dubai-Blanket-House E-Commerce Platform

![Build Status](...)
![License](...)

A full-stack e-commerce platform built with MERN stack.

## 🚀 Live Demo

[Frontend](https://...)
[Admin Panel](https://...)

## ✨ Features

- Product catalog with filtering, sorting, search
- Shopping cart & checkout
- User authentication & authorization
- Order management
- Admin dashboard
- ...

## 🛠 Tech Stack

- Frontend: React, Vite, Tailwind CSS, React Router
- Backend: Node.js, Express.js
- Database: MongoDB, Mongoose
- Auth: JWT, bcrypt
- ...

## 📁 Project Structure

...

## 🚦 Getting Started

...

## 📝 API Documentation

...

## 🗄 Database Schema

...

## 🚀 Deployment

...

## 🧪 Testing

...

## 📸 Screenshots

### Frontend Folder Structer

src/
├── api/ # API integration layer
│ ├── axios.config.js # Axios instance with interceptors
│ ├── auth.api.js # Auth endpoints
│ ├── products.api.js # Product endpoints
│ ├── cart.api.js # Cart endpoints
│ └── orders.api.js # Order endpoints
│
├── components/ # Reusable components
│ ├── common/ # Buttons, inputs, cards, modals
│ ├── layout/ # Header, Footer, Sidebar
│ ├── product/ # ProductCard, ProductGrid, Filters
│ ├── cart/ # CartDrawer, CartItem, CartSummary
│ └── checkout/ # Checkout steps
│
├── context/ # React Context
│ ├── AuthContext.js # Authentication state
│ ├── CartContext.js # Cart state
│ └── ThemeContext.js # Theme (optional)
│
├── hooks/ # Custom hooks
│ ├── useAuth.js # Auth logic
│ ├── useCart.js # Cart logic
│ ├── useDebounce.js # Debouncing for search
│ └── useLocalStorage.js
│
├── pages/ # Page components
│ ├── Home/
│ ├── Shop/
│ ├── ProductDetail/
│ ├── Cart/
│ ├── Checkout/
│ ├── Login/
│ ├── Register/
│ └── Account/
│
├── layouts/ # Layout components
│ ├── MainLayout.jsx
│ └── AuthLayout.jsx
│
├── utils/ # Utilities
│ ├── helpers.js
│ ├── validators.js
│ └── constants.js
│
├── styles/ # Global styles
│ └── index.css
│
└── App.jsx # Main app with routing

### Backend Folder Structer

server/
├── src/
│ ├── config/ # Configuration
│ │ ├── database.js # MongoDB connection
│ │ ├── cloudinary.js # Image upload
│ │ └── email.js # Email service
│ │
│ ├── models/ # Mongoose Models
│ │ ├── User.model.js
│ │ ├── Product.model.js
│ │ ├── Category.model.js
│ │ ├── Order.model.js
│ │ ├── Cart.model.js
│ │ └── Coupon.model.js
│ │
│ ├── controllers/ # Route controllers
│ │ ├── auth.controller.js
│ │ ├── product.controller.js
│ │ ├── category.controller.js
│ │ ├── cart.controller.js
│ │ ├── order.controller.js
│ │ └── user.controller.js
│ │
│ ├── routes/ # Route definitions
│ │ ├── auth.routes.js
│ │ ├── product.routes.js
│ │ ├── category.routes.js
│ │ ├── cart.routes.js
│ │ ├── order.routes.js
│ │ └── user.routes.js
│ │
│ ├── middleware/ # Express middleware
│ │ ├── auth.js # JWT verification
│ │ ├── admin.js # Admin role check
│ │ ├── validation.js
│ │ ├── errorHandler.js
│ │ ├── upload.js # File upload
│ │ └── rateLimiter.js
│ │
│ ├── services/ # Business logic
│ │ ├── product.service.js
│ │ ├── order.service.js
│ │ └── email.service.js
│ │
│ ├── validators/ # Request validation
│ │ ├── auth.validator.js
│ │ ├── product.validator.js
│ │ └── order.validator.js
│ │
│ ├── utils/ # Utilities
│ │ ├── jwt.js
│ │ ├── password.js
│ │ └── helpers.js
│ │
│ └── app.js # Express app setup
│
├── .env # Environment variables
└── server.js # Entry point

...

## 🔮 Future Improvements

...

## 📄 License

MIT
