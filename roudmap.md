# COMPLETE TECHNICAL BLUEPRINT & ROADMAP

## PHASE 0: FEATURE INVENTORY

After analyzing **https://www.exportleftovers.com/**, here is the comprehensive feature breakdown:

### PUBLIC PAGES & ROUTES

#### Core Pages (Must Have)

1. **Home** (`/`)
2. **Shop** (`/shop`)
3. **Product Details** (`/product/:id`)
4. **Cart** (`/cart`)
5. **Checkout** (`/checkout`)
6. **Order Confirmation** (`/order-confirmation`)
7. **Login** (`/login`)
8. **Register** (`/register`)
9. **Account Dashboard** (`/account`)
10. **Orders** (`/account/orders`)
11. **Order Details** (`/account/order/:id`)
12. **Wishlist** (`/wishlist`)

#### Supporting Pages (Should Have)

13. **About Us** (`/about`)
14. **Contact** (`/contact`)
15. **FAQ** (`/faq`)
16. **Shipping Policy** (`/shipping`)
17. **Returns Policy** (`/returns`)
18. **Privacy Policy** (`/privacy`)
19. **Terms & Conditions** (`/terms`)

#### Category Pages (Nice to Have)

20. **Category Listing** (`/category/:slug`)
21. **Brand Pages** (`/brand/:slug`)

---

### HOMEPAGE SECTION BREAKDOWN

```
1. ANNOUNCEMENT BAR
   - Purpose: Promotional messages, free shipping threshold
   - Data Source: Static/Admin controlled
   - Interaction: Dismissible

2. MAIN HEADER
   - Logo
   - Search Bar
   - Account Icon
   - Wishlist Icon
   - Cart Icon with badge

3. NAVIGATION
   - Main Categories
   - Mega Menu/Dropdowns
   - Mobile Hamburger Menu
   - Responsive behavior

4. HERO SECTION
   - Full-width banner
   - Call-to-action buttons
   - Promotional text
   - Background image/carousel
   - Responsive scaling

5. CATEGORY GRID
   - 4-6 category cards
   - Image + Title
   - Link to category page
   - Hover effects
   - Mobile grid adjustment

6. FEATURED PRODUCTS
   - Product cards in grid
   - Title, Price, Rating
   - Quick add to cart
   - Sale badges
   - Image hover zoom

7. BEST SELLERS
   - Same as featured but with "Best Seller" badge
   - Different sorting logic

8. NEW ARRIVALS
   - "New" badge
   - Same product card structure

9. BRAND SECTION
   - Brand logos in row
   - Clickable to brand/category

10. PROMOTIONAL BANNER
    - Mid-page banner
    - Call to action
    - Responsive image

11. INSTAGRAM/SOCIAL FEED
    - Grid of posts
    - Link to social media

12. NEWSLETTER SECTION
    - Email input
    - Submit button
    - Success/error state

13. TRUST BADGES
    - Secure payment
    - Free shipping
    - 30-day returns
    - Customer support

14. FOOTER
    - Quick links
    - Categories
    - Social media
    - Payment icons
    - Copyright
```

---

### PRODUCT SYSTEM INVENTORY

#### Product Card Components

- Product Image (with hover zoom)
- Product Title (truncated)
- Price (current + original if on sale)
- Rating (stars + count)
- Quick Add to Cart button
- Wishlist toggle button
- Sale badge
- New badge
- Out of stock badge
- Color/Swatch options

#### Product Details Page

- Image Gallery with thumbnails
- Main product image with zoom
- Product title
- Price display (with sale pricing)
- Product description
- Variants (Size, Color, Style)
- Quantity selector
- Add to Cart button
- Buy Now button
- Wishlist toggle
- Stock availability
- SKU display
- Category breadcrumbs
- Related Products
- Recently Viewed Products
- Customer Reviews
- Rating breakdown
- Product Specifications/Attributes

#### Product Filtering System

- Category filter
- Price range slider
- Brand filter
- Size filter
- Color filter
- Rating filter
- Availability filter (in stock)
- Clear filters
- Active filters display
- Filter count badges

#### Product Sorting

- Relevance
- Newest
- Price: Low to High
- Price: High to Low
- Rating
- Popularity

#### Product Search

- Live search suggestions
- Search by title, description, category
- Search results page
- No results state
- Search filters applied

---

### CART SYSTEM INVENTORY

#### Cart Features

- Add to cart (with quantity)
- Cart drawer/sidebar
- Cart page with full details
- Quantity update (+/- buttons)
- Remove item (trash icon)
- Clear cart button
- Subtotal calculation
- Discount code input
- Shipping estimate
- Tax calculation (if applicable)
- Total calculation
- Proceed to checkout button
- Empty cart state
- Cart persistence (localStorage for guest)
- Cart sync for logged-in users
- Stock validation on add to cart
- Variant selection in cart

---

### CHECKOUT SYSTEM INVENTORY

#### Checkout Steps

1. **Shipping Information**
   - Full name
   - Email address
   - Phone number
   - Address line 1
   - Address line 2 (optional)
   - City
   - State/Province
   - ZIP/Postal code
   - Country

2. **Shipping Method**
   - Standard shipping
   - Express shipping
   - Free shipping (if eligible)

3. **Payment Method**
   - Cash on Delivery (COD)
   - Online payment (Card/Bank transfer)
   - Payment method selection

4. **Order Summary**
   - Items list with quantities
   - Subtotal
   - Shipping cost
   - Discount (if applied)
   - Tax
   - Total

5. **Place Order**
   - Terms & Conditions checkbox
   - Place Order button
   - Order confirmation page

#### Checkout Validation

- All required fields validation
- Email format validation
- Phone number validation
- ZIP code validation
- Address validation
- Payment method validation

---

### AUTHENTICATION SYSTEM

#### Must Have

- User Registration
  - Name, Email, Password
  - Password confirmation
  - Email uniqueness check
  - Password hashing (bcrypt)
- User Login
  - Email + Password
  - JWT token generation
  - Token storage (httpOnly cookie recommended)
  - Remember me option
- Logout
  - Clear token
  - Redirect to home

- Protected Routes
  - Authentication required middleware
  - Redirect to login if not authenticated

- Account Dashboard
  - Profile information
  - Order history
  - Update profile
  - Change password

#### Should Have (for V2)

- Password Reset
  - Send reset email
  - Reset token
  - Reset form
- Email Verification
  - Verification email on registration
  - Verify email endpoint
- Guest Checkout
  - Checkout without registration
  - Option to create account after order

#### Nice to Have (V3)

- Social Login (Google, Facebook)
- Two-Factor Authentication
- Role-based access control (RBAC)

---

### ADMIN DASHBOARD INVENTORY

#### Dashboard Overview

- Total Revenue
- Total Orders
- Total Products
- Total Customers
- Recent Orders
- Sales Chart (daily/weekly/monthly)
- Low Stock Products alert
- Top selling products
- Recent customer activity

#### Product Management

- Product List (with search/filter/pagination)
- Add New Product form
- Edit Product form
- Product Categories
- Product Images upload (multiple)
- Bulk import (CSV/Excel)
- Export products
- Product status (published/draft/archived)
- Inventory management

#### Category Management

- Category List
- Add/Edit Category
- Category hierarchy (parent/child)
- Category image upload

#### Order Management

- Order List
- Order Details
- Update Order Status
  - Pending
  - Processing
  - Shipped
  - Delivered
  - Cancelled
- Order filters (date range, status, customer)
- Order notes
- Print invoice

#### Customer Management

- Customer List
- Customer Details
- Order history per customer
- Customer activity
- Block/Unblock customer

#### Coupon Management

- Coupon List
- Create/Edit Coupon
  - Code
  - Discount type (percentage/fixed)
  - Discount value
  - Minimum order amount
  - Expiry date
  - Usage limit
  - Applicable products/categories

#### Banner Management

- Banner List
- Create/Edit Banner
  - Title
  - Image
  - Link
  - Position
  - Active status
  - Order/priority

#### Settings

- General Settings (site name, logo, etc.)
- Payment Settings (COD, online payment)
- Shipping Settings
- Tax Settings
- Email Settings

---

## PHASE 1: PROJECT SCOPE DEFINITION

### VERSION 1 - MVP (Minimum Viable Product)

**Goal:** A functional e-commerce website that works end-to-end

#### Features:

1. **Frontend Pages**
   - Homepage with header, hero, categories, products grid
   - Shop page with basic product listing
   - Product Details page
   - Cart page
   - Checkout (simple)
   - Login & Register

2. **Backend APIs**
   - Product CRUD
   - Category CRUD
   - Cart operations
   - Order creation
   - User registration & login

3. **Database**
   - User, Product, Category, Cart, Order models

4. **Admin**
   - Basic product management
   - Basic order management

**Estimated Time:** 4-6 weeks (part-time)
**Learning Goals:** MERN fundamentals, CRUD operations, authentication

---

### VERSION 2 - PRODUCTION-STYLE

**Goal:** A portfolio-ready e-commerce application

#### Adds:

1. **Frontend Enhancements**
   - Complete responsive design
   - Advanced product filtering & sorting
   - Search with autocomplete
   - Wishlist
   - Account dashboard with order history
   - All supporting pages (About, Contact, FAQ, etc.)
   - Cart drawer
   - Guest checkout with account creation
   - Order confirmation with email

2. **Backend Enhancements**
   - Complete REST API
   - Advanced validation
   - Error handling middleware
   - Logging
   - Email service (order confirmation, password reset)
   - Password reset functionality
   - Pagination, filtering, sorting on all list endpoints
   - Rate limiting
   - File upload (product images)

3. **Admin Dashboard**
   - Dashboard with analytics
   - Complete product/category management
   - Complete order management
   - Customer management
   - Coupon management
   - Banner management

4. **Security**
   - JWT with refresh tokens
   - Input sanitization
   - Helmet.js
   - CORS properly configured
   - Environment variables for secrets

**Estimated Time:** 8-12 weeks (part-time)
**Learning Goals:** Production-grade code, advanced features, security, admin panel

---

### VERSION 3 - ADVANCED

**Goal:** Enterprise-level e-commerce platform

#### Adds:

1. **Frontend**
   - Redux Toolkit for complex state management
   - React Query for server state
   - Advanced animations
   - PWA support
   - Complete test coverage (unit + integration)
   - SEO optimization
   - Analytics integration
   - Performance optimization (lazy loading, code splitting)
   - CMS-like content management

2. **Backend**
   - Microservices architecture (optional)
   - Redis caching
   - Elasticsearch for product search
   - WebSocket for real-time notifications
   - Advanced reporting
   - Backup and restore
   - CI/CD pipeline
   - Monitoring and alerts

3. **Features**
   - Social login
   - Multi-language support
   - Multi-currency
   - Advanced discount system
   - Product reviews and ratings
   - Recently viewed products
   - Product recommendations
   - Affiliate system
   - Newsletter system
   - Bulk product import/export
   - Advanced reporting & analytics

**Estimated Time:** 16-20 weeks (part-time)
**Learning Goals:** Advanced React, system design, scaling, DevOps

---

## PHASE 2: TECH STACK JUSTIFICATION

### Core Stack (Mandatory for V1 & V2)

#### Frontend

| Technology      | Purpose          | Why                                               |
| --------------- | ---------------- | ------------------------------------------------- |
| React 18        | UI Library       | Industry standard, component-based, hooks         |
| Vite            | Build Tool       | Faster than CRA, modern, easier configuration     |
| React Router v6 | Routing          | Industry standard for React routing               |
| Tailwind CSS    | Styling          | Utility-first, faster development, responsive     |
| Axios           | HTTP Client      | Better than fetch for interceptor, error handling |
| React Context   | State Management | Built-in, sufficient for V1-V2                    |

#### Backend

| Technology            | Purpose          | Why                                         |
| --------------------- | ---------------- | ------------------------------------------- |
| Node.js               | Runtime          | JavaScript everywhere, huge ecosystem       |
| Express.js            | Web Framework    | Minimal, flexible, industry standard        |
| MongoDB Atlas         | Database         | Document-based, flexible schema, MERN stack |
| Mongoose              | ODM              | Schema validation, middleware, relations    |
| JWT                   | Authentication   | Stateless, scalable, industry standard      |
| Bcrypt                | Password Hashing | Secure, industry standard                   |
| Joi/express-validator | Validation       | Schema validation, secure input             |

#### Deployment

| Technology     | Purpose          | Why                                |
| -------------- | ---------------- | ---------------------------------- |
| Vercel         | Frontend Hosting | Easy deploy, custom domain, CDN    |
| Railway/Render | Backend Hosting  | Easy deploy, environment variables |
| MongoDB Atlas  | Database         | Managed, backups, monitoring       |

---

## PHASE 3: ARCHITECTURE

### HIGH-LEVEL ARCHITECTURE

```
┌─────────────────────────────────────────────────────────────┐
│                         CLIENT                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              React Application (Vite)                │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐        │   │
│  │  │  Pages   │  │Components│  │  Context │        │   │
│  │  └──────────┘  └──────────┘  └──────────┘        │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐        │   │
│  │  │  Hooks   │  │ Services │  │  Utils   │        │   │
│  │  └──────────┘  └──────────┘  └──────────┘        │   │
│  │                │ API Client │                     │   │
│  └────────────────────┬──────────────────────────────┘   │
└────────────────────────┼─────────────────────────────────┘
                          │ HTTPS
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                         SERVER                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Express.js Application                  │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐        │   │
│  │  │ Routes   │  │Controllers│ │ Middleware│        │   │
│  │  └──────────┘  └──────────┘  └──────────┘        │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐        │   │
│  │  │ Services │  │  Models  │  │  Validators│       │   │
│  │  └──────────┘  └──────────┘  └──────────┘        │   │
│  └────────────────────┬──────────────────────────────┘   │
└────────────────────────┼─────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                      DATABASE                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              MongoDB Atlas                           │   │
│  │  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐         │   │
│  │  │ Users│  │Products│ │Orders│  │Carts │         │   │
│  │  └──────┘  └──────┘  └──────┘  └──────┘         │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### FRONTEND ARCHITECTURE

```
src/
├── api/                 # API integration layer
│   ├── axios.config.js   # Axios instance with interceptors
│   ├── auth.api.js       # Auth endpoints
│   ├── products.api.js   # Product endpoints
│   ├── cart.api.js      # Cart endpoints
│   └── orders.api.js    # Order endpoints
│
├── components/           # Reusable components
│   ├── common/          # Buttons, inputs, cards, modals
│   ├── layout/          # Header, Footer, Sidebar
│   ├── product/         # ProductCard, ProductGrid, Filters
│   ├── cart/            # CartDrawer, CartItem, CartSummary
│   └── checkout/        # Checkout steps
│
├── context/             # React Context
│   ├── AuthContext.js   # Authentication state
│   ├── CartContext.js   # Cart state
│   └── ThemeContext.js  # Theme (optional)
│
├── hooks/               # Custom hooks
│   ├── useAuth.js       # Auth logic
│   ├── useCart.js       # Cart logic
│   ├── useDebounce.js   # Debouncing for search
│   └── useLocalStorage.js
│
├── pages/               # Page components
│   ├── Home/
│   ├── Shop/
│   ├── ProductDetail/
│   ├── Cart/
│   ├── Checkout/
│   ├── Login/
│   ├── Register/
│   └── Account/
│
├── layouts/             # Layout components
│   ├── MainLayout.jsx
│   └── AuthLayout.jsx
│
├── utils/               # Utilities
│   ├── helpers.js
│   ├── validators.js
│   └── constants.js
│
├── styles/              # Global styles
│   └── index.css
│
└── App.jsx              # Main app with routing
```

### BACKEND ARCHITECTURE

```
server/
├── src/
│   ├── config/          # Configuration
│   │   ├── database.js  # MongoDB connection
│   │   ├── cloudinary.js # Image upload
│   │   └── email.js     # Email service
│   │
│   ├── models/          # Mongoose Models
│   │   ├── User.model.js
│   │   ├── Product.model.js
│   │   ├── Category.model.js
│   │   ├── Order.model.js
│   │   ├── Cart.model.js
│   │   └── Coupon.model.js
│   │
│   ├── controllers/     # Route controllers
│   │   ├── auth.controller.js
│   │   ├── product.controller.js
│   │   ├── category.controller.js
│   │   ├── cart.controller.js
│   │   ├── order.controller.js
│   │   └── user.controller.js
│   │
│   ├── routes/          # Route definitions
│   │   ├── auth.routes.js
│   │   ├── product.routes.js
│   │   ├── category.routes.js
│   │   ├── cart.routes.js
│   │   ├── order.routes.js
│   │   └── user.routes.js
│   │
│   ├── middleware/      # Express middleware
│   │   ├── auth.js      # JWT verification
│   │   ├── admin.js     # Admin role check
│   │   ├── validation.js
│   │   ├── errorHandler.js
│   │   ├── upload.js    # File upload
│   │   └── rateLimiter.js
│   │
│   ├── services/        # Business logic
│   │   ├── product.service.js
│   │   ├── order.service.js
│   │   └── email.service.js
│   │
│   ├── validators/      # Request validation
│   │   ├── auth.validator.js
│   │   ├── product.validator.js
│   │   └── order.validator.js
│   │
│   ├── utils/           # Utilities
│   │   ├── jwt.js
│   │   ├── password.js
│   │   └── helpers.js
│   │
│   └── app.js           # Express app setup
│
├── .env                 # Environment variables
└── server.js            # Entry point
```

### DATA FLOW

```
1. USER INTERACTION
   ↓
2. REACT COMPONENT
   ↓
3. CONTEXT/HOOK (state management)
   ↓
4. API SERVICE (axios)
   ↓
5. EXPRESS ROUTE
   ↓
6. MIDDLEWARE (auth, validation)
   ↓
7. CONTROLLER (request handling)
   ↓
8. SERVICE (business logic)
   ↓
9. MODEL (database operation)
   ↓
10. MONGODB
   ↓
11. RESPONSE
   ↓
12. STATE UPDATE
   ↓
13. UI RERENDER
```

### AUTHENTICATION ARCHITECTURE

```
REGISTRATION:
Client → POST /api/auth/register → Validate input → Hash password → Create user → Return JWT

LOGIN:
Client → POST /api/auth/login → Validate credentials → Generate JWT → Set httpOnly cookie → Return user data

AUTHENTICATED REQUESTS:
Client → Attach JWT in Authorization header → Middleware verifies JWT → Attach user to req → Proceed

LOGOUT:
Client → POST /api/auth/logout → Clear cookie → Return success

PROTECTED ROUTES:
Middleware checks JWT → Valid? → next() → 401 Unauthorized

ADMIN ROUTES:
Authentication middleware → Check user.role === 'admin' → next() → 403 Forbidden
```

### STATE MANAGEMENT STRATEGY

#### Context-Based State

```
1. AUTH CONTEXT
   - user: null | userObject
   - token: string | null
   - loading: boolean
   - error: string | null
   - Actions: login, register, logout, updateProfile

2. CART CONTEXT
   - items: [CartItem]
   - totalItems: number
   - totalPrice: number
   - Actions: addItem, removeItem, updateQuantity, clearCart

3. THEME CONTEXT (Optional)
   - theme: 'light' | 'dark'
   - Actions: toggleTheme
```

#### Local State (Component-level)

```
- Product filters/sorting
- Form state
- UI state (modals, drawers, dropdowns)
- Pagination state
- Search input
```

#### Server State

```
- Products (fetched from API)
- Categories
- Orders
- User data

Use React Query for V3 (optional for V2)
```

### ERROR HANDLING STRATEGY

#### Backend Error Handling

```javascript
// Custom Error Classes
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

// Error Handler Middleware
const errorHandler = (err, req, res, next) => {
  // Handle Mongoose errors
  // Handle Validation errors
  // Handle JWT errors
  // Return standardized error response
}

// API Response Format
{
  success: false,
  message: "Error message",
  errors: [ // Validation errors
    {
      field: "email",
      message: "Email is required"
    }
  ]
}
```

#### Frontend Error Handling

```
- API error interceptor
- Error boundaries
- Toast notifications for user feedback
- Form validation errors
- Loading states
- Empty states
- Network error handling
- Fallback UI
```

### SECURITY STRATEGY

1. **Authentication**
   - JWT stored in httpOnly cookies (prevents XSS)
   - Refresh token rotation
   - Password hashing with bcrypt (10+ rounds)

2. **Input Validation**
   - Schema validation with Joi/express-validator
   - Sanitization of user input
   - SQL Injection prevention (Mongoose does this)

3. **API Security**
   - Rate limiting (100 requests per 15 minutes)
   - Helmet.js for security headers
   - CORS properly configured
   - XSS protection
   - CSRF protection (using sameSite cookies)

4. **Data Security**
   - Environment variables for secrets
   - No secrets in code or GitHub
   - Password reset tokens with expiry
   - Email verification for new accounts
   - HTTPS in production

5. **Authorization**
   - Role-based access control (user, admin)
   - Route guards on frontend
   - Middleware verification on backend

### DEPLOYMENT ARCHITECTURE

```
PRODUCTION ENVIRONMENT:

┌─────────────────────────────────────────────┐
│               VERCEL (Frontend)              │
│  ┌────────────────────────────────────────┐  │
│  │    React App (Built with Vite)         │  │
│  │    └── Environment Variables           │  │
│  │    └── Custom Domain                   │  │
│  └────────────────────────────────────────┘  │
└───────────────────────────────────────────────┘
                     │
                     │ API Calls
                     ▼
┌─────────────────────────────────────────────┐
│             RAILWAY (Backend)                │
│  ┌────────────────────────────────────────┐  │
│  │    Node.js + Express                    │  │
│  │    └── Environment Variables           │  │
│  │    └── PM2 for process management      │  │
│  └────────────────────────────────────────┘  │
└───────────────────────────────────────────────┘
                     │
                     │ Database Connection
                     ▼
┌─────────────────────────────────────────────┐
│          MONGODB ATLAS                       │
│  ┌────────────────────────────────────────┐  │
│  │    Production Cluster                   │  │
│  │    └── Daily backups                   │  │
│  │    └── Monitoring                      │  │
│  └────────────────────────────────────────┘  │
└───────────────────────────────────────────────┘
```

---

## PHASE 4: FOLDER STRUCTURE

### COMPLETE PROJECT STRUCTURE

```
ecommerce-app/
│
├── client/                          # Frontend
│   ├── public/
│   │   ├── favicon.ico
│   │   └── assets/                  # Static assets (images, fonts)
│   │       ├── images/
│   │       └── fonts/
│   │
│   ├── src/
│   │   ├── api/                     # API integration layer
│   │   │   ├── axios.config.js      # Axios setup with interceptors
│   │   │   ├── auth.api.js          # Auth endpoints (login, register, logout)
│   │   │   ├── products.api.js      # Product endpoints
│   │   │   ├── categories.api.js    # Category endpoints
│   │   │   ├── cart.api.js          # Cart endpoints
│   │   │   ├── orders.api.js        # Order endpoints
│   │   │   ├── users.api.js         # User endpoints
│   │   │   └── admin.api.js         # Admin endpoints
│   │   │
│   │   ├── components/              # Reusable UI components
│   │   │   ├── common/              # Generic components
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Input.jsx
│   │   │   │   ├── Select.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   ├── Spinner.jsx
│   │   │   │   ├── Toast.jsx
│   │   │   │   └── Rating.jsx
│   │   │   │
│   │   │   ├── layout/              # Layout components
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Navigation.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   └── MainLayout.jsx
│   │   │   │
│   │   │   ├── product/             # Product-related components
│   │   │   │   ├── ProductCard.jsx
│   │   │   │   ├── ProductGrid.jsx
│   │   │   │   ├── ProductFilters.jsx
│   │   │   │   ├── ProductSort.jsx
│   │   │   │   ├── ProductDetails.jsx
│   │   │   │   ├── ProductGallery.jsx
│   │   │   │   ├── RelatedProducts.jsx
│   │   │   │   └── ProductSkeleton.jsx
│   │   │   │
│   │   │   ├── cart/                # Cart components
│   │   │   │   ├── CartDrawer.jsx
│   │   │   │   ├── CartItem.jsx
│   │   │   │   ├── CartSummary.jsx
│   │   │   │   └── EmptyCart.jsx
│   │   │   │
│   │   │   ├── checkout/            # Checkout components
│   │   │   │   ├── CheckoutForm.jsx
│   │   │   │   ├── ShippingForm.jsx
│   │   │   │   ├── PaymentForm.jsx
│   │   │   │   ├── OrderSummary.jsx
│   │   │   │   └── CheckoutSteps.jsx
│   │   │   │
│   │   │   └── admin/               # Admin components
│   │   │       ├── DashboardStats.jsx
│   │   │       ├── ProductTable.jsx
│   │   │       ├── OrderTable.jsx
│   │   │       └── AdminLayout.jsx
│   │   │
│   │   ├── context/                 # React Context
│   │   │   ├── AuthContext.jsx      # Authentication state
│   │   │   ├── CartContext.jsx      # Cart state
│   │   │   ├── ProductContext.jsx   # Product state (optional)
│   │   │   └── index.js             # Export all contexts
│   │   │
│   │   ├── hooks/                   # Custom React hooks
│   │   │   ├── useAuth.js           # Auth logic
│   │   │   ├── useCart.js           # Cart logic
│   │   │   ├── useDebounce.js       # Debouncing
│   │   │   ├── useLocalStorage.js   # Local storage persistence
│   │   │   ├── useScrollTop.js      # Scroll to top on navigation
│   │   │   └── useOutsideClick.js   # Detect outside click
│   │   │
│   │   ├── pages/                   # Page components
│   │   │   ├── Home/                # Homepage
│   │   │   │   ├── Home.jsx
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── CategoryGrid.jsx
│   │   │   │   └── FeaturedProducts.jsx
│   │   │   │
│   │   │   ├── Shop/                # Shop page
│   │   │   │   ├── Shop.jsx
│   │   │   │   └── ShopFilters.jsx
│   │   │   │
│   │   │   ├── ProductDetail/       # Product details
│   │   │   │   └── ProductDetail.jsx
│   │   │   │
│   │   │   ├── Cart/                # Cart page
│   │   │   │   └── Cart.jsx
│   │   │   │
│   │   │   ├── Checkout/            # Checkout
│   │   │   │   └── Checkout.jsx
│   │   │   │
│   │   │   ├── OrderConfirmation/   # Order confirmation
│   │   │   │   └── OrderConfirmation.jsx
│   │   │   │
│   │   │   ├── Account/             # Account pages
│   │   │   │   ├── Account.jsx
│   │   │   │   ├── Profile.jsx
│   │   │   │   ├── Orders.jsx
│   │   │   │   └── OrderDetail.jsx
│   │   │   │
│   │   │   ├── Auth/                # Authentication pages
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── Register.jsx
│   │   │   │   └── ForgotPassword.jsx
│   │   │   │
│   │   │   ├── About/               # About page
│   │   │   │   └── About.jsx
│   │   │   │
│   │   │   ├── Contact/             # Contact page
│   │   │   │   └── Contact.jsx
│   │   │   │
│   │   │   ├── FAQ/                 # FAQ page
│   │   │   │   └── FAQ.jsx
│   │   │   │
│   │   │   ├── Wishlist/            # Wishlist page
│   │   │   │   └── Wishlist.jsx
│   │   │   │
│   │   │   └── Admin/               # Admin pages
│   │   │       ├── Dashboard.jsx
│   │   │       ├── Products.jsx
│   │   │       ├── ProductForm.jsx
│   │   │       ├── Categories.jsx
│   │   │       ├── Orders.jsx
│   │   │       ├── Customers.jsx
│   │   │       └── Coupons.jsx
│   │   │
│   │   ├── routes/                  # Route configuration
│   │   │   ├── AppRoutes.jsx        # Main routes
│   │   │   ├── PrivateRoute.jsx     # Protected route wrapper
│   │   │   └── AdminRoute.jsx       # Admin route wrapper
│   │   │
│   │   ├── styles/                  # Global styles
│   │   │   ├── index.css            # Tailwind imports
│   │   │   └── variables.css        # CSS variables
│   │   │
│   │   ├── utils/                   # Utility functions
│   │   │   ├── constants.js         # App constants
│   │   │   ├── helpers.js           # Helper functions
│   │   │   ├── validators.js        # Validation functions
│   │   │   └── format.js            # Formatting utilities
│   │   │
│   │   ├── App.jsx                  # Main app component
│   │   ├── main.jsx                 # Entry point
│   │   └── vite-env.d.ts            # TypeScript declarations
│   │
│   ├── .env.example                 # Environment variables template
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── README.md
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.js
│
├── server/                          # Backend
│   ├── src/
│   │   ├── config/                  # Configuration
│   │   │   ├── database.js          # MongoDB connection
│   │   │   ├── cloudinary.js        # Image upload config
│   │   │   ├── email.js             # Email configuration
│   │   │   └── constants.js         # Backend constants
│   │   │
│   │   ├── models/                  # Mongoose models
│   │   │   ├── User.model.js
│   │   │   ├── Product.model.js
│   │   │   ├── Category.model.js
│   │   │   ├── Cart.model.js
│   │   │   ├── Order.model.js
│   │   │   ├── Coupon.model.js
│   │   │   ├── Review.model.js
│   │   │   └── Banner.model.js
│   │   │
│   │   ├── controllers/             # Route handlers
│   │   │   ├── auth.controller.js
│   │   │   ├── user.controller.js
│   │   │   ├── product.controller.js
│   │   │   ├── category.controller.js
│   │   │   ├── cart.controller.js
│   │   │   ├── order.controller.js
│   │   │   ├── coupon.controller.js
│   │   │   ├── review.controller.js
│   │   │   ├── banner.controller.js
│   │   │   └── admin.controller.js
│   │   │
│   │   ├── routes/                  # Route definitions
│   │   │   ├── index.js             # Route aggregator
│   │   │   ├── auth.routes.js
│   │   │   ├── user.routes.js
│   │   │   ├── product.routes.js
│   │   │   ├── category.routes.js
│   │   │   ├── cart.routes.js
│   │   │   ├── order.routes.js
│   │   │   ├── coupon.routes.js
│   │   │   ├── review.routes.js
│   │   │   ├── banner.routes.js
│   │   │   └── admin.routes.js
│   │   │
│   │   ├── middleware/              # Express middleware
│   │   │   ├── auth.js              # JWT verification
│   │   │   ├── admin.js             # Admin authorization
│   │   │   ├── validation.js        # Request validation
│   │   │   ├── errorHandler.js      # Global error handler
│   │   │   ├── notFound.js          # 404 handler
│   │   │   ├── upload.js            # File upload
│   │   │   ├── rateLimiter.js       # Rate limiting
│   │   │   └── logger.js            # Request logging
│   │   │
│   │   ├── services/                # Business logic
│   │   │   ├── auth.service.js      # Auth logic
│   │   │   ├── product.service.js   # Product logic
│   │   │   ├── order.service.js     # Order logic
│   │   │   ├── cart.service.js      # Cart logic
│   │   │   ├── email.service.js     # Email sending
│   │   │   └── payment.service.js   # Payment processing
│   │   │
│   │   ├── validators/              # Request validators
│   │   │   ├── auth.validator.js
│   │   │   ├── product.validator.js
│   │   │   ├── order.validator.js
│   │   │   ├── category.validator.js
│   │   │   └── coupon.validator.js
│   │   │
│   │   ├── utils/                   # Utilities
│   │   │   ├── jwt.js               # JWT operations
│   │   │   ├── password.js          # Password hashing
│   │   │   ├── apiResponse.js       # Standardized responses
│   │   │   ├── asyncHandler.js      # Async error wrapper
│   │   │   └── helpers.js           # Helper functions
│   │   │
│   │   ├── data/                    # Seed data
│   │   │   ├── products.js
│   │   │   ├── categories.js
│   │   │   └── users.js
│   │   │
│   │   └── app.js                   # Express app setup
│   │
│   ├── uploads/                     # Uploaded files (temporary)
│   │
│   ├── .env.example                 # Environment variables template
│   ├── .gitignore
│   ├── package.json
│   ├── server.js                    # Entry point
│   └── README.md
│
├── docs/                            # Documentation
│   ├── API.md
│   ├── ARCHITECTURE.md
│   ├── DATABASE.md
│   ├── DEPLOYMENT.md
│   └── TESTING.md
│
├── .gitignore                       # Root gitignore
├── package.json                     # Root package.json (optional)
└── README.md                        # Main README
```

### FOLDER PURPOSE EXPLANATIONS

#### Client Folders

| Folder        | Purpose         | What belongs                     | What does NOT belong      |
| ------------- | --------------- | -------------------------------- | ------------------------- |
| `api/`        | API integration | Axios config, endpoint functions | Components, UI logic      |
| `components/` | Reusable UI     | Presentational components        | Business logic, API calls |
| `context/`    | Global state    | AuthContext, CartContext         | Component-specific state  |
| `hooks/`      | Custom hooks    | Reusable logic                   | Components                |
| `pages/`      | Page components | Route-level components           | Reusable components       |
| `routes/`     | Routing         | Route definitions, guards        | Page components           |
| `utils/`      | Utilities       | Helper functions, constants      | Business logic            |
| `styles/`     | Global styles   | CSS files                        | Component-specific styles |

#### Server Folders

| Folder         | Purpose            | What belongs              | What does NOT belong             |
| -------------- | ------------------ | ------------------------- | -------------------------------- |
| `config/`      | Configuration      | DB connection, cloudinary | Business logic                   |
| `models/`      | Database schemas   | Mongoose schemas          | Controllers, services            |
| `controllers/` | Request handling   | Route handlers            | Database queries, business logic |
| `routes/`      | Route definitions  | Endpoint definitions      | Controllers, models              |
| `middleware/`  | Express middleware | Auth, validation, errors  | Business logic                   |
| `services/`    | Business logic     | Complex operations        | Direct DB calls                  |
| `validators/`  | Input validation   | Schema validators         | Controllers                      |
| `utils/`       | Utilities          | JWT, password helpers     | Business logic                   |

---

## PHASE 5: DATABASE DESIGN

### ER DIAGRAM (Text Representation)

```
┌──────────────┐       ┌──────────────┐       ┌──────────────┐
│    USER      │       │   ORDER      │       │  ORDER_ITEM  │
├──────────────┤       ├──────────────┤       ├──────────────┤
│ _id (PK)     │──┐    │ _id (PK)     │──┐    │ _id (PK)     │
│ name         │  │    │ user (FK)    │  │    │ order (FK)   │
│ email        │  │    │ items[]      │──┘    │ product (FK) │
│ password     │  │    │ shippingAddr │       │ variant      │
│ role         │  │    │ paymentMethod│       │ quantity     │
│ phone        │  │    │ subtotal     │       │ price        │
│ addresses[]  │  │    │ shippingCost │       │ subtotal     │
│ wishlist[]   │──┘    │ discount     │       └──────────────┘
│ createdAt    │       │ total        │
│ updatedAt    │       │ status       │       ┌──────────────┐
└──────────────┘       │ createdAt    │       │   PRODUCT    │
                       └──────────────┘       ├──────────────┤
                                              │ _id (PK)     │
┌──────────────┐       ┌──────────────┐       │ title        │
│  CATEGORY    │       │    CART      │       │ slug         │
├──────────────┤       ├──────────────┤       │ description  │
│ _id (PK)     │──┐    │ _id (PK)     │       │ price        │
│ name         │  │    │ user (FK)    │──┐    │ salePrice    │
│ slug         │  │    │ items[]      │  │    │ images[]     │
│ parent (FK)  │──┘    │ createdAt    │  │    │ category(FK) │
│ image        │       │ updatedAt    │  │    │ variants[]   │
│ description  │       └──────────────┘  │    │ stock        │
└──────────────┘                         │    │ sku          │
                                         │    │ ratings      │
                                         │    │ status       │
                                         └───▶│ createdAt    │
                                              │ updatedAt    │
                                              └──────────────┘
```

### MODEL SCHEMAS

#### 1. User Model

```javascript
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
      select: false, // Don't return password in queries
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    phone: {
      type: String,
      trim: true,
    },
    addresses: [
      {
        label: String, // 'Home', 'Office'
        fullName: String,
        phone: String,
        addressLine1: String,
        addressLine2: String,
        city: String,
        state: String,
        zipCode: String,
        country: String,
        isDefault: { type: Boolean, default: false },
      },
    ],
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: String,
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    lastLogin: Date,
  },
  {
    timestamps: true,
  },
);

// Indexes
userSchema.index({ email: 1 });
userSchema.index({ resetPasswordToken: 1 });
```

**Example Document:**

```json
{
  "_id": "64a1b2c3d4e5f6a7b8c9d0e1",
  "name": "Ahmed Khan",
  "email": "ahmed@example.com",
  "password": "$2b$10$...",
  "role": "user",
  "phone": "+92-300-1234567",
  "addresses": [
    {
      "label": "Home",
      "fullName": "Ahmed Khan",
      "phone": "+92-300-1234567",
      "addressLine1": "House 123, Street 4",
      "addressLine2": "DHA Phase 5",
      "city": "Karachi",
      "state": "Sindh",
      "zipCode": "75500",
      "country": "Pakistan",
      "isDefault": true
    }
  ],
  "wishlist": ["64a1b2c3d4e5f6a7b8c9d0e2"],
  "isVerified": true,
  "createdAt": "2024-01-15T10:00:00.000Z",
  "updatedAt": "2024-01-15T10:00:00.000Z"
}
```

#### 2. Product Model

```javascript
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Product title is required"],
      trim: true,
      maxlength: [200, "Title cannot exceed 200 characters"],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      maxlength: [5000, "Description cannot exceed 5000 characters"],
    },
    shortDescription: {
      type: String,
      maxlength: [300, "Short description cannot exceed 300 characters"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    salePrice: {
      type: Number,
      min: [0, "Sale price cannot be negative"],
      validate: {
        validator: function (v) {
          return !v || v < this.price;
        },
        message: "Sale price must be less than original price",
      },
    },
    images: [
      {
        url: { type: String, required: true },
        alt: String,
        isPrimary: { type: Boolean, default: false },
      },
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Category is required"],
    },
    brand: {
      type: String,
      trim: true,
    },
    variants: [
      {
        name: String, // 'Size', 'Color'
        options: [
          {
            value: String, // 'S', 'M', 'L', 'Red', 'Blue'
            stock: { type: Number, default: 0, min: 0 },
            sku: String,
            price: Number, // Optional variant-specific price
          },
        ],
      },
    ],
    stock: {
      type: Number,
      required: [true, "Stock is required"],
      min: [0, "Stock cannot be negative"],
      default: 0,
    },
    sku: {
      type: String,
      unique: true,
      sparse: true,
    },
    tags: [String],
    specifications: [
      {
        key: String,
        value: String,
      },
    ],
    ratings: {
      average: { type: Number, default: 0, min: 0, max: 5 },
      count: { type: Number, default: 0 },
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    isFeatured: { type: Boolean, default: false },
    isNewArrival: { type: Boolean, default: false },
    isBestSeller: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["active", "draft", "archived"],
      default: "active",
    },
    soldCount: { type: Number, default: 0 },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

// Virtual for discount percentage
productSchema.virtual("discountPercentage").get(function () {
  if (!this.salePrice) return 0;
  return Math.round(((this.price - this.salePrice) / this.price) * 100);
});

// Virtual for current price
productSchema.virtual("currentPrice").get(function () {
  return this.salePrice || this.price;
});

// Indexes
productSchema.index({ title: "text", description: "text" });
productSchema.index({ category: 1, status: 1 });
productSchema.index({ price: 1 });
productSchema.index({ createdAt: -1 });
productSchema.index({ slug: 1 });
```

**Example Document:**

```json
{
  "_id": "64a1b2c3d4e5f6a7b8c9d0e3",
  "title": "Cotton Casual Shirt",
  "slug": "cotton-casual-shirt",
  "description": "Premium quality cotton shirt...",
  "shortDescription": "Premium cotton casual shirt",
  "price": 2500,
  "salePrice": 1999,
  "images": [
    {
      "url": "https://res.cloudinary.com/.../shirt1.jpg",
      "alt": "Cotton Casual Shirt - Front View",
      "isPrimary": true
    }
  ],
  "category": "64a1b2c3d4e5f6a7b8c9d0e4",
  "brand": "Export Leftovers",
  "variants": [
    {
      "name": "Size",
      "options": [
        { "value": "S", "stock": 10, "sku": "SHIRT-S" },
        { "value": "M", "stock": 15, "sku": "SHIRT-M" },
        { "value": "L", "stock": 8, "sku": "SHIRT-L" }
      ]
    },
    {
      "name": "Color",
      "options": [
        { "value": "Blue", "stock": 20, "sku": "SHIRT-BLUE" },
        { "value": "White", "stock": 13, "sku": "SHIRT-WHITE" }
      ]
    }
  ],
  "stock": 33,
  "sku": "SHIRT-001",
  "tags": ["cotton", "casual", "summer"],
  "specifications": [
    { "key": "Material", "value": "100% Cotton" },
    { "key": "Fit", "value": "Regular" }
  ],
  "ratings": { "average": 4.5, "count": 10 },
  "isFeatured": true,
  "status": "active",
  "soldCount": 45,
  "createdAt": "2024-01-15T10:00:00.000Z"
}
```

#### 3. Category Model

```javascript
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      trim: true,
      unique: true,
      maxlength: [50, "Category name cannot exceed 50 characters"],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
    image: {
      type: String,
      default: "",
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    sortOrder: {
      type: Number,
      default: 0,
    },
    productCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

// Indexes
categorySchema.index({ slug: 1 });
categorySchema.index({ parent: 1 });
categorySchema.index({ isActive: 1 });
```

#### 4. Cart Model

```javascript
const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, "Quantity must be at least 1"],
          default: 1,
        },
        variant: {
          name: String,
          value: String,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    subtotal: {
      type: Number,
      default: 0,
    },
    totalItems: {
      type: Number,
      default: 0,
    },
    coupon: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Coupon",
    },
  },
  {
    timestamps: true,
  },
);

// Index
cartSchema.index({ user: 1 });
```

#### 5. Order Model

```javascript
const orderSchema = new mongoose.Schema(
  {
    orderNumber: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        title: String,
        image: String,
        variant: {
          name: String,
          value: String,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        price: {
          type: Number,
          required: true,
        },
        subtotal: {
          type: Number,
          required: true,
        },
      },
    ],
    shippingAddress: {
      fullName: { type: String, required: true },
      phone: { type: String, required: true },
      addressLine1: { type: String, required: true },
      addressLine2: String,
      city: { type: String, required: true },
      state: String,
      zipCode: String,
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      enum: ["cod", "card", "bank_transfer"],
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed", "refunded"],
      default: "pending",
    },
    paymentDetails: {
      transactionId: String,
      paidAt: Date,
    },
    subtotal: {
      type: Number,
      required: true,
    },
    shippingCost: {
      type: Number,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    couponCode: String,
    tax: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: [
        "pending",
        "processing",
        "shipped",
        "delivered",
        "cancelled",
        "returned",
      ],
      default: "pending",
    },
    statusHistory: [
      {
        status: String,
        timestamp: { type: Date, default: Date.now },
        note: String,
      },
    ],
    notes: String,
    deliveredAt: Date,
    cancelledAt: Date,
  },
  {
    timestamps: true,
  },
);

// Generate order number before saving
orderSchema.pre("save", async function (next) {
  if (this.isNew) {
    const count = await this.constructor.countDocuments();
    this.orderNumber = `ORD-${Date.now()}-${count + 1}`;
  }
  next();
});

// Indexes
orderSchema.index({ user: 1, createdAt: -1 });
orderSchema.index({ status: 1 });
orderSchema.index({ orderNumber: 1 });
orderSchema.index({ createdAt: -1 });
```

#### 6. Coupon Model

```javascript
const couponSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },
    description: String,
    discountType: {
      type: String,
      enum: ["percentage", "fixed"],
      required: true,
    },
    discountValue: {
      type: Number,
      required: true,
      min: [0, "Discount value cannot be negative"],
    },
    minOrderAmount: {
      type: Number,
      default: 0,
    },
    maxDiscount: {
      type: Number, // For percentage type, cap the discount
      default: null,
    },
    applicableProducts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    applicableCategories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
    usageLimit: {
      type: Number,
      default: null, // null = unlimited
    },
    usedCount: {
      type: Number,
      default: 0,
    },
    perUserLimit: {
      type: Number,
      default: 1,
    },
    usedBy: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        count: { type: Number, default: 1 },
      },
    ],
    startDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    endDate: {
      type: Date,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

// Indexes
couponSchema.index({ code: 1 });
couponSchema.index({ isActive: 1, endDate: 1 });
```

#### 7. Review Model

```javascript
const reviewSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: [1, "Rating must be at least 1"],
      max: [5, "Rating cannot exceed 5"],
    },
    title: {
      type: String,
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    comment: {
      type: String,
      required: [true, "Review comment is required"],
      maxlength: [1000, "Comment cannot exceed 1000 characters"],
    },
    isVerifiedPurchase: {
      type: Boolean,
      default: false,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// Ensure one review per user per product
reviewSchema.index({ product: 1, user: 1 }, { unique: true });
reviewSchema.index({ product: 1, isApproved: 1 });
```

#### 8. Banner Model

```javascript
const bannerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    subtitle: String,
    image: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: "/shop",
    },
    buttonText: {
      type: String,
      default: "Shop Now",
    },
    position: {
      type: String,
      enum: ["hero", "promotional", "sidebar", "category"],
      default: "hero",
    },
    sortOrder: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    startDate: Date,
    endDate: Date,
  },
  {
    timestamps: true,
  },
);

bannerSchema.index({ position: 1, isActive: 1, sortOrder: 1 });
```

---

## PHASE 6: API DESIGN

### API CONVENTIONS

```
BASE URL: /api/v1

AUTHENTICATION:
- Public: No auth required
- Customer: Requires valid JWT (role: user)
- Admin: Requires valid JWT (role: admin)

RESPONSE FORMAT:
Success: {
  success: true,
  message: "Operation successful",
  data: { ... }
}

Error: {
  success: false,
  message: "Error description",
  errors: [{ field: "email", message: "Invalid email" }]
}

PAGINATION:
?page=1&limit=12

SORTING:
?sort=price_asc | price_desc | newest | rating | popular

FILTERING:
?category=slug&minPrice=100&maxPrice=5000&brand=Nike&rating=4&inStock=true

SEARCH:
?search=cotton+shirt

HTTP STATUS CODES:
200 - Success
201 - Created
400 - Bad Request (validation error)
401 - Unauthorized (not logged in)
403 - Forbidden (no permission)
404 - Not Found
409 - Conflict (duplicate)
429 - Too Many Requests (rate limit)
500 - Internal Server Error
```

### COMPLETE API ROUTE MAP

#### AUTH ROUTES (`/api/v1/auth`)

| Method | Route                    | Auth | Role | Request Body                                 | Response          |
| ------ | ------------------------ | ---- | ---- | -------------------------------------------- | ----------------- |
| POST   | `/register`              | No   | -    | `{ name, email, password, confirmPassword }` | `{ user, token }` |
| POST   | `/login`                 | No   | -    | `{ email, password }`                        | `{ user, token }` |
| POST   | `/logout`                | Yes  | user | -                                            | `{ message }`     |
| GET    | `/me`                    | Yes  | user | -                                            | `{ user }`        |
| PUT    | `/update-profile`        | Yes  | user | `{ name, phone }`                            | `{ user }`        |
| PUT    | `/change-password`       | Yes  | user | `{ currentPassword, newPassword }`           | `{ message }`     |
| POST   | `/forgot-password`       | No   | -    | `{ email }`                                  | `{ message }`     |
| PUT    | `/reset-password/:token` | No   | -    | `{ password, confirmPassword }`              | `{ message }`     |
| GET    | `/verify-email/:token`   | No   | -    | -                                            | `{ message }`     |

#### PRODUCT ROUTES (`/api/v1/products`)

| Method | Route          | Auth | Role | Query Params                                                                                                        | Response                   |
| ------ | -------------- | ---- | ---- | ------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| GET    | `/`            | No   | -    | `page, limit, sort, category, minPrice, maxPrice, brand, rating, inStock, search, featured, newArrival, bestSeller` | `{ products, pagination }` |
| GET    | `/:id`         | No   | -    | -                                                                                                                   | `{ product }`              |
| GET    | `/slug/:slug`  | No   | -    | -                                                                                                                   | `{ product }`              |
| GET    | `/:id/related` | No   | -    | `limit`                                                                                                             | `{ products }`             |
| POST   | `/:id/reviews` | Yes  | user | `{ rating, title, comment }`                                                                                        | `{ review }`               |
| GET    | `/:id/reviews` | No   | -    | `page, limit`                                                                                                       | `{ reviews, pagination }`  |

#### CATEGORY ROUTES (`/api/v1/categories`)

| Method | Route             | Auth | Role | Response                        |
| ------ | ----------------- | ---- | ---- | ------------------------------- |
| GET    | `/`               | No   | -    | `{ categories }`                |
| GET    | `/tree`           | No   | -    | `{ categories }` (hierarchical) |
| GET    | `/:slug`          | No   | -    | `{ category }`                  |
| GET    | `/:slug/products` | No   | -    | `{ products, pagination }`      |

#### CART ROUTES (`/api/v1/cart`)

| Method | Route            | Auth | Role | Request Body                       | Response             |
| ------ | ---------------- | ---- | ---- | ---------------------------------- | -------------------- |
| GET    | `/`              | Yes  | user | -                                  | `{ cart }`           |
| POST   | `/items`         | Yes  | user | `{ productId, quantity, variant }` | `{ cart }`           |
| PUT    | `/items/:itemId` | Yes  | user | `{ quantity }`                     | `{ cart }`           |
| DELETE | `/items/:itemId` | Yes  | user | -                                  | `{ cart }`           |
| DELETE | `/`              | Yes  | user | -                                  | `{ message }`        |
| POST   | `/apply-coupon`  | Yes  | user | `{ code }`                         | `{ cart, discount }` |
| DELETE | `/remove-coupon` | Yes  | user | -                                  | `{ cart }`           |

#### ORDER ROUTES (`/api/v1/orders`)

| Method | Route         | Auth | Role | Request Body                                | Response                 |
| ------ | ------------- | ---- | ---- | ------------------------------------------- | ------------------------ |
| POST   | `/`           | Yes  | user | `{ shippingAddress, paymentMethod, notes }` | `{ order }`              |
| GET    | `/my-orders`  | Yes  | user | -                                           | `{ orders, pagination }` |
| GET    | `/:id`        | Yes  | user | -                                           | `{ order }`              |
| PUT    | `/:id/cancel` | Yes  | user | -                                           | `{ order }`              |

#### USER ROUTES (`/api/v1/users`)

| Method | Route                    | Auth | Role | Request Body  | Response        |
| ------ | ------------------------ | ---- | ---- | ------------- | --------------- |
| GET    | `/wishlist`              | Yes  | user | -             | `{ wishlist }`  |
| POST   | `/wishlist/:productId`   | Yes  | user | -             | `{ wishlist }`  |
| DELETE | `/wishlist/:productId`   | Yes  | user | -             | `{ wishlist }`  |
| GET    | `/addresses`             | Yes  | user | -             | `{ addresses }` |
| POST   | `/addresses`             | Yes  | user | `{ address }` | `{ address }`   |
| PUT    | `/addresses/:id`         | Yes  | user | `{ address }` | `{ address }`   |
| DELETE | `/addresses/:id`         | Yes  | user | -             | `{ message }`   |
| PUT    | `/addresses/:id/default` | Yes  | user | -             | `{ addresses }` |

#### ADMIN ROUTES (`/api/v1/admin`)

| Method | Route                    | Auth | Role  | Description                     |
| ------ | ------------------------ | ---- | ----- | ------------------------------- |
| GET    | `/dashboard/stats`       | Yes  | admin | Dashboard statistics            |
| GET    | `/dashboard/sales-chart` | Yes  | admin | Sales data for chart            |
| GET    | `/products`              | Yes  | admin | List all products (incl. draft) |
| POST   | `/products`              | Yes  | admin | Create product                  |
| PUT    | `/products/:id`          | Yes  | admin | Update product                  |
| DELETE | `/products/:id`          | Yes  | admin | Delete product                  |
| PATCH  | `/products/:id/status`   | Yes  | admin | Update product status           |
| POST   | `/products/bulk-import`  | Yes  | admin | Bulk import products            |
| GET    | `/categories`            | Yes  | admin | List all categories             |
| POST   | `/categories`            | Yes  | admin | Create category                 |
| PUT    | `/categories/:id`        | Yes  | admin | Update category                 |
| DELETE | `/categories/:id`        | Yes  | admin | Delete category                 |
| GET    | `/orders`                | Yes  | admin | List all orders                 |
| GET    | `/orders/:id`            | Yes  | admin | Get order details               |
| PUT    | `/orders/:id/status`     | Yes  | admin | Update order status             |
| GET    | `/customers`             | Yes  | admin | List customers                  |
| GET    | `/customers/:id`         | Yes  | admin | Customer details                |
| GET    | `/coupons`               | Yes  | admin | List coupons                    |
| POST   | `/coupons`               | Yes  | admin | Create coupon                   |
| PUT    | `/coupons/:id`           | Yes  | admin | Update coupon                   |
| DELETE | `/coupons/:id`           | Yes  | admin | Delete coupon                   |
| GET    | `/reviews`               | Yes  | admin | List all reviews                |
| PATCH  | `/reviews/:id/approve`   | Yes  | admin | Approve review                  |
| DELETE | `/reviews/:id`           | Yes  | admin | Delete review                   |
| GET    | `/banners`               | Yes  | admin | List banners                    |
| POST   | `/banners`               | Yes  | admin | Create banner                   |
| PUT    | `/banners/:id`           | Yes  | admin | Update banner                   |
| DELETE | `/banners/:id`           | Yes  | admin | Delete banner                   |

#### COMMON ROUTES

| Method | Route                          | Auth | Description             |
| ------ | ------------------------------ | ---- | ----------------------- |
| POST   | `/api/v1/contact`              | No   | Send contact message    |
| POST   | `/api/v1/newsletter/subscribe` | No   | Subscribe to newsletter |
| GET    | `/api/v1/health`               | No   | Health check            |

---

## PHASE 7: GITHUB STRUCTURE

### REPOSITORY SETUP

**Repository Name:** `mern-ecommerce` or `[your-brand]-ecommerce`

**Description:** Full-stack e-commerce platform built with MongoDB, Express, React, and Node.js

### README STRUCTURE

```markdown
# [Your Brand] E-Commerce Platform

![Build Status](...)
![License](...)

A full-stack e-commerce platform built with MERN stack.

## 🚀 Live Demo

[Frontend](https://...) | [Admin Panel](https://...)

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

...

## 🔮 Future Improvements

...

## 📄 License

MIT
```

### .GITIGNORE

```
# Dependencies
node_modules/
.pnp
.pnp.js

# Environment
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Build
dist/
build/

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Uploads
uploads/

# Coverage
coverage/
```

### .ENV.EXAMPLE

**Client (.env.example):**

```env
VITE_API_URL=http://localhost:5000/api/v1
VITE_APP_NAME=YourBrand
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

**Server (.env.example):**

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_super_secret_key_change_this
JWT_EXPIRE=7d
JWT_REFRESH_SECRET=your_refresh_secret
JWT_REFRESH_EXPIRE=30d
CLIENT_URL=http://localhost:5173
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX=100

# Email (optional for V1)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
EMAIL_FROM=noreply@yourbrand.com

# Cloudinary (for images)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### GITHUB LABELS

```
Priority:
- priority:critical (red)
- priority:high (orange)
- priority:medium (yellow)
- priority:low (green)

Type:
- type:feature (blue)
- type:bug (red)
- type:documentation (purple)
- type:refactor (gray)
- type:test (green)
- type:chore (light gray)

Difficulty:
- difficulty:easy (green)
- difficulty:medium (yellow)
- difficulty:hard (orange)
- difficulty:expert (red)

Status:
- status:blocked (red)
- status:in-progress (yellow)
- status:review (blue)
```

### MILESTONES

| #   | Milestone        | Description                                | Due        |
| --- | ---------------- | ------------------------------------------ | ---------- |
| 1   | Foundation       | Project setup, repo structure, base config | Week 1     |
| 2   | Backend Core     | Express server, MongoDB, models, base API  | Week 2-3   |
| 3   | Authentication   | Register, login, JWT, protected routes     | Week 4     |
| 4   | Frontend Shell   | React setup, routing, layout, components   | Week 5     |
| 5   | Product System   | Product CRUD, categories, catalog          | Week 6-7   |
| 6   | E-commerce Core  | Cart, checkout, orders                     | Week 8-9   |
| 7   | Admin Panel      | Admin dashboard, management                | Week 10-11 |
| 8   | Testing & Polish | Bug fixes, edge cases, responsive          | Week 12    |
| 9   | Deployment       | Deploy to production                       | Week 13    |

### INITIAL GITHUB ISSUES

**Total: 50 issues initially**

#### Milestone 1 — Foundation (6 issues)

1. **Setup project repository structure**
   - Description: Create monorepo with client and server folders
   - Tasks: Create folders, .gitignore, README, package.json
   - AC: Repo structure matches design, README exists, gitignore excludes node_modules/.env
   - Labels: difficulty:easy, type:chore

2. **Configure frontend project with Vite + React**
   - Description: Initialize React app with Vite, setup Tailwind CSS
   - Tasks: create-vite, install deps, configure Tailwind, basic App
   - AC: `npm run dev` works, Tailwind classes render
   - Labels: difficulty:easy, type:setup

3. **Configure backend project with Express**
   - Description: Initialize Express server, basic middleware, health check
   - Tasks: npm init, install express, basic server, nodemon
   - AC: Server runs on port 5000, `/health` returns 200
   - Labels: difficulty:easy, type:setup

4. **Setup MongoDB connection**
   - Description: Connect to MongoDB, add DB config
   - Tasks: Install mongoose, connect, error handling
   - AC: Server starts, logs "MongoDB Connected"
   - Labels: difficulty:easy, type:setup

5. **Setup environment variables**
   - Description: Configure .env for both client and server
   - Tasks: dotenv setup, .env.example files
   - AC: Environment variables load correctly
   - Labels: difficulty:easy, type:setup

6. **Add initial README and documentation**
   - Description: Create project README and docs folder
   - Tasks: README.md, ARCHITECTURE.md, API.md
   - AC: Documentation covers setup and architecture
   - Labels: difficulty:easy, type:documentation

#### Milestone 2 — Backend Core (10 issues)

7. **Create User model**
   - Description: Mongoose schema for users
   - Tasks: Schema, validation, password hashing hook, indexes
   - AC: Model created, password hashed automatically
   - Labels: difficulty:medium, type:feature

8. **Create Product model**
   - Description: Mongoose schema for products
   - Tasks: Schema with variants, virtuals, indexes
   - AC: Model supports variants and virtuals
   - Labels: difficulty:medium, type:feature

9. **Create Category model**
   - Description: Mongoose schema for categories
   - Tasks: Schema with parent reference, hierarchy
   - AC: Categories support parent/child relationship
   - Labels: difficulty:easy, type:feature

10. **Create Cart model**
    - Description: Mongoose schema for cart
    - Tasks: Schema with items, user reference
    - AC: Cart linked to user
    - Labels: difficulty:easy, type:feature

11. **Create Order model**
    - Description: Mongoose schema for orders
    - Tasks: Schema with items, status, order number generation
    - AC: Order number auto-generated on save
    - Labels: difficulty:medium, type:feature

12. **Create remaining models (Coupon, Review, Banner)**
    - Description: Create remaining models
    - Tasks: All three schemas
    - AC: All models have proper validation
    - Labels: difficulty:medium, type:feature

13. **Setup error handling middleware**
    - Description: Global error handler, custom AppError class
    - Tasks: AppError class, errorHandler middleware, notFound middleware
    - AC: All errors return standardized JSON
    - Labels: difficulty:medium, type:feature

14. **Setup validation middleware**
    - Description: Request validation using Joi
    - Tasks: Install Joi, create validation middleware
    - AC: Invalid requests return 400 with field errors
    - Labels: difficulty:medium, type:feature

15. **Setup API response utility**
    - Description: Standardized response format
    - Tasks: apiResponse.js with success/error methods
    - AC: All controllers use standardized responses
    - Labels: difficulty:easy, type:refactor

16. **Add async error wrapper**
    - Description: Wrap async controllers to catch errors
    - Tasks: asyncHandler utility
    - AC: Async errors forwarded to error handler
    - Labels: difficulty:easy, type:refactor

#### Milestone 3 — Authentication (8 issues)

17. **Implement user registration**
    - Description: POST /auth/register endpoint
    - Tasks: Controller, validation, hash password, generate JWT
    - AC: User can register, receives JWT
    - Labels: difficulty:medium, type:feature

18. **Implement user login**
    - Description: POST /auth/login endpoint
    - Tasks: Controller, verify credentials, generate JWT
    - AC: User can login, receives JWT
    - Labels: difficulty:medium, type:feature

19. **Implement JWT authentication middleware**
    - Description: Middleware to verify JWT
    - Tasks: auth.js middleware, extract user from token
    - AC: Protected routes return 401 without token
    - Labels: difficulty:medium, type:feature

20. **Implement admin authorization middleware**
    - Description: Middleware to check admin role
    - Tasks: admin.js middleware
    - AC: Admin routes return 403 for non-admin
    - Labels: difficulty:easy, type:feature

21. **Implement get current user endpoint**
    - Description: GET /auth/me
    - Tasks: Controller, return user without password
    - AC: Returns authenticated user data
    - Labels: difficulty:easy, type:feature

22. **Implement update profile**
    - Description: PUT /auth/update-profile
    - Tasks: Controller, validation, update user
    - AC: User can update name and phone
    - Labels: difficulty:easy, type:feature

23. **Implement change password**
    - Description: PUT /auth/change-password
    - Tasks: Controller, verify current, hash new
    - AC: User can change password
    - Labels: difficulty:medium, type:feature

24. **Implement forgot/reset password**
    - Description: POST /auth/forgot-password, PUT /auth/reset-password/:token
    - Tasks: Generate token, send email, reset endpoint
    - AC: User receives email, can reset password
    - Labels: difficulty:hard, type:feature

#### Milestone 4 — Frontend Shell (8 issues)

25. **Setup React Router with layouts**
    - Description: Configure routing, layout components
    - Tasks: Install react-router-dom, create layouts, route structure
    - AC: Navigation works, layouts render correctly
    - Labels: difficulty:medium, type:feature

26. **Create Header component**
    - Description: Responsive header with logo, search, nav, icons
    - Tasks: Header.jsx, mobile menu, responsive
    - AC: Header responsive, all elements present
    - Labels: difficulty:medium, type:feature

27. **Create Footer component**
    - Description: Footer with links, social, payment icons
    - Tasks: Footer.jsx, responsive columns
    - AC: Footer renders with all sections
    - Labels: difficulty:easy, type:feature

28. **Create common UI components**
    - Description: Button, Input, Modal, Spinner, Toast
    - Tasks: All common components
    - AC: Components reusable, styled consistently
    - Labels: difficulty:medium, type:feature

29. **Setup Axios with interceptors**
    - Description: Axios instance with auth and error interceptors
    - Tasks: axios.config.js
    - AC: Requests include token, errors handled globally
    - Labels: difficulty:medium, type:feature

30. **Create AuthContext**
    - Description: Context for authentication state
    - Tasks: AuthContext.jsx with login, register, logout
    - AC: Auth state available app-wide, persists on refresh
    - Labels: difficulty:medium, type:feature

31. **Create CartContext**
    - Description: Context for cart state
    - Tasks: CartContext.jsx with add, remove, update
    - AC: Cart state available, persists for logged-in users
    - Labels: difficulty:medium, type:feature

32. **Create Login and Register pages**
    - Description: Auth pages with forms
    - Tasks: Login.jsx, Register.jsx, validation
    - AC: User can login/register, redirects on success
    - Labels: difficulty:medium, type:feature

#### Milestone 5 — Product System (8 issues)

33. **Create product listing API**
    - Description: GET /products with filtering, sorting, pagination
    - Tasks: Controller with query building
    - AC: Filters, sorting, pagination work
    - Labels: difficulty:hard, type:feature

34. **Create single product API**
    - Description: GET /products/:id and /slug/:slug
    - Tasks: Controller with populated category
    - AC: Returns single product with details
    - Labels: difficulty:easy, type:feature

35. **Create category APIs**
    - Description: GET /categories, /categories/tree, /:slug
    - Tasks: Controller with hierarchy support
    - AC: Returns categories, tree structure works
    - Labels: difficulty:medium, type:feature

36. **Create ProductCard component**
    - Description: Reusable product card
    - Tasks: ProductCard.jsx with image, title, price, rating
    - AC: Card displays product info, hover effects
    - Labels: difficulty:medium, type:feature

37. **Create ProductGrid component**
    - Description: Grid of product cards with skeleton loading
    - Tasks: ProductGrid.jsx, loading skeleton
    - AC: Grid responsive, shows skeletons while loading
    - Labels: difficulty:medium, type:feature

38. **Create Shop page**
    - Description: Product listing with filters
    - Tasks: Shop.jsx, filters sidebar, sorting dropdown
    - AC: Shop shows products, filters work
    - Labels: difficulty:hard, type:feature

39. **Create ProductDetail page**
    - Description: Product details with gallery, variants
    - Tasks: ProductDetail.jsx, gallery, variant selector, add to cart
    - AC: Details display, can select variants, add to cart
    - Labels: difficulty:hard, type:feature

40. **Implement search functionality**
    - Description: Search products with debouncing
    - Tasks: Search bar, debounced API call, results page
    - AC: Search returns relevant products
    - Labels: difficulty:medium, type:feature

#### Milestone 6 — E-commerce Core (8 issues)

41. **Create cart APIs**
    - Description: Cart CRUD endpoints
    - Tasks: GET, POST, PUT, DELETE cart endpoints
    - AC: Cart operations work for authenticated users
    - Labels: difficulty:medium, type:feature

42. **Create CartDrawer component**
    - Description: Slide-out cart drawer
    - Tasks: CartDrawer.jsx, animations
    - AC: Drawer opens, shows items, can update/remove
    - Labels: difficulty:medium, type:feature

43. **Create Cart page**
    - Description: Full cart page
    - Tasks: Cart.jsx with items, summary, coupon input
    - AC: Cart shows all items, totals calculate correctly
    - Labels: difficulty:medium, type:feature

44. **Implement guest cart (localStorage)**
    - Description: Cart for non-logged-in users
    - Tasks: localStorage cart, merge on login
    - AC: Guest can add to cart, cart merges on login
    - Labels: difficulty:hard, type:feature

45. **Create checkout APIs**
    - Description: Order creation endpoint
    - Tasks: POST /orders, validation, stock check
    - AC: Order created, stock decremented, cart cleared
    - Labels: difficulty:hard, type:feature

46. **Create Checkout page**
    - Description: Multi-step checkout
    - Tasks: Checkout.jsx with shipping, payment, review steps
    - AC: User can complete checkout, order created
    - Labels: difficulty:hard, type:feature

47. **Create OrderConfirmation page**
    - Description: Order success page
    - Tasks: OrderConfirmation.jsx with order details
    - AC: Shows order number, items, total
    - Labels: difficulty:easy, type:feature

48. **Create user orders page**
    - Description: User's order history
    - Tasks: Orders.jsx, OrderDetail.jsx
    - AC: User sees order history, can view details
    - Labels: difficulty:medium, type:feature

#### Milestone 7 — Admin Panel (6 issues)

49. **Create admin dashboard**
    - Description: Stats overview with charts
    - Tasks: Dashboard.jsx, stats cards, sales chart
    - AC: Shows revenue, orders, products, customers
    - Labels: difficulty:hard, type:feature

50. **Create admin product management**
    - Description: CRUD for products
    - Tasks: Products.jsx, ProductForm.jsx
    - AC: Admin can create, edit, delete products
    - Labels: difficulty:hard, type:feature

---

## PHASE 8: IMPLEMENTATION ROADMAP

### COMPLETE BUILD ORDER

```
PHASE 1: FOUNDATION (Tasks 1-8)
├── Task 1: Setup repository structure
├── Task 2: Configure frontend with Vite + React + Tailwind
├── Task 3: Configure backend with Express
├── Task 4: Setup MongoDB connection
├── Task 5: Environment variables setup
├── Task 6: Setup error handling middleware
├── Task 7: Setup validation middleware
├── Task 8: Setup API response utilities

PHASE 2: DATABASE MODELS (Tasks 9-16)
├── Task 9: Create User model
├── Task 10: Create Category model
├── Task 11: Create Product model
├── Task 12: Create Cart model
├── Task 13: Create Order model
├── Task 14: Create Coupon model
├── Task 15: Create Review model
├── Task 16: Create Banner model

PHASE 3: AUTHENTICATION (Tasks 17-24)
├── Task 17: Implement user registration
├── Task 18: Implement user login
├── Task 19: JWT authentication middleware
├── Task 20: Admin authorization middleware
├── Task 21: Get current user endpoint
├── Task 22: Update profile endpoint
├── Task 23: Change password endpoint
├── Task 24: Forgot/reset password

PHASE 4: PRODUCT APIs (Tasks 25-30)
├── Task 25: Product listing API (filter, sort, paginate)
├── Task 26: Single product API
├── Task 27: Category APIs
├── Task 28: Product search API
├── Task 29: Related products API
├── Task 30: Product reviews API

PHASE 5: FRONTEND SHELL (Tasks 31-38)
├── Task 31: React Router + layouts
├── Task 32: Header component
├── Task 33: Footer component
├── Task 34: Common UI components
├── Task 35: Axios configuration
├── Task 36: AuthContext
├── Task 37: CartContext
├── Task 38: Login/Register pages

PHASE 6: PRODUCT CATALOG UI (Tasks 39-44)
├── Task 39: ProductCard component
├── Task 40: ProductGrid component
├── Task 41: Homepage
├── Task 42: Shop page with filters
├── Task 43: ProductDetail page
├── Task 44: Search functionality

PHASE 7: CART & CHECKOUT (Tasks 45-52)
├── Task 45: Cart APIs
├── Task 46: CartContext integration
├── Task 47: CartDrawer component
├── Task 48: Cart page
├── Task 49: Guest cart (localStorage)
├── Task 50: Checkout APIs
├── Task 51: Checkout page
├── Task 52: Order confirmation + user orders

PHASE 8: ADMIN PANEL (Tasks 53-60)
├── Task 53: Admin layout + route guard
├── Task 54: Admin dashboard
├── Task 55: Admin product management
├── Task 56: Admin category management
├── Task 57: Admin order management
├── Task 58: Admin customer management
├── Task 59: Admin coupon management
├── Task 60: Admin banner management

PHASE 9: ADVANCED FEATURES (Tasks 61-66)
├── Task 61: Wishlist
├── Task 62: Product reviews (frontend)
├── Task 63: Coupon application
├── Task 64: Newsletter subscription
├── Task 65: Contact form
├── Task 66: Supporting pages (About, FAQ, etc.)

PHASE 10: TESTING & POLISH (Tasks 67-72)
├── Task 67: API testing (Postman/Thunder Client)
├── Task 68: Frontend form validation testing
├── Task 69: Authentication flow testing
├── Task 70: Order flow testing
├── Task 71: Mobile responsiveness
├── Task 72: Error/empty/loading states

PHASE 11: DEPLOYMENT (Tasks 73-76)
├── Task 73: MongoDB Atlas setup
├── Task 74: Backend deployment (Railway)
├── Task 75: Frontend deployment (Vercel)
├── Task 76: Production testing & debugging

PHASE 12: DOCUMENTATION (Tasks 77-80)
├── Task 77: README finalization
├── Task 78: API documentation
├── Task 79: Architecture documentation
├── Task 80: Deployment guide
```

---

## PHASE 9: BUILD ORDER JUSTIFICATION

**Why this order?**

1. **Backend before Frontend:** Building the API first means the frontend has a stable contract to work against. It prevents rework.

2. **Models before Routes:** Define your data shape first. Routes depend on models.

3. **Auth before Product:** Products need auth (admin), and cart/orders need users. Auth is a dependency.

4. **Product APIs before Catalog UI:** The UI consumes the API. Build the source of truth first.

5. **Cart before Checkout:** Checkout depends on cart. Natural progression.

6. **Admin after Customer flow:** Admin is just another consumer of the same APIs. Build the core first.

7. **Testing throughout, not at the end:** Every task has testing criteria. The dedicated testing phase is for integration and edge cases.

8. **Deployment before documentation:** Deploy early enough to catch environment-specific bugs, but document at the end when everything is stable.

9. **Advanced features last:** Wishlist, reviews, coupons — these are add-ons that don't block core flow.

---

## PHASE 10: UI DEVELOPMENT PLAN

### COMPONENT HIERARCHY

```
App
├── AuthProvider
├── CartProvider
├── Router
│   ├── MainLayout
│   │   ├── Header
│   │   │   ├── Logo
│   │   │   ├── SearchBar
│   │   │   ├── NavLinks
│   │   │   ├── AccountMenu
│   │   │   ├── CartIcon
│   │   │   └── MobileMenu
│   │   ├── Outlet (Page Content)
│   │   └── Footer
│   │
│   ├── AdminLayout
│   │   ├── AdminSidebar
│   │   ├── AdminHeader
│   │   └── Outlet
│   │
│   └── AuthLayout
│       └── Outlet
│
└── CartDrawer (Portal)
```

### PAGE RESPONSIVE BEHAVIOR

| Page           | Desktop                | Tablet                     | Mobile                   |
| -------------- | ---------------------- | -------------------------- | ------------------------ |
| Home           | 4-col grid, full hero  | 3-col grid, smaller hero   | 2-col grid, stacked hero |
| Shop           | Sidebar filters, 3-col | Collapsible filters, 2-col | Drawer filters, 2-col    |
| Product Detail | 2-col (gallery + info) | 2-col                      | Stacked                  |
| Cart           | Table layout           | Table layout               | Card layout              |
| Checkout       | 2-col (form + summary) | 2-col                      | Stacked                  |
| Admin          | Sidebar + content      | Collapsible sidebar        | Bottom nav               |

---

## PHASE 11: STATE MANAGEMENT

### STATE CLASSIFICATION

| State               | Type   | Where        | Why                        |
| ------------------- | ------ | ------------ | -------------------------- |
| User/auth           | Global | AuthContext  | Needed app-wide            |
| Cart items          | Global | CartContext  | Header badge, drawer, page |
| Wishlist            | Global | Context      | Header badge, page         |
| Toast notifications | Global | Context      | App-wide feedback          |
| Product list        | Server | Local (page) | Only needed on that page   |
| Product detail      | Server | Local (page) | Only needed on that page   |
| Filters/sort        | Local  | Component    | UI-only state              |
| Form inputs         | Local  | Component    | UI-only state              |
| Modal open          | Local  | Component    | UI-only state              |
| Pagination          | Local  | Component    | UI-only state              |
| Search query        | Local  | Component    | UI-only state              |

**Rule:** If two unrelated components need it → Context. If only one page/component → Local.

**Do NOT use Redux for V1/V2.** Context is sufficient. Consider Redux Toolkit for V3 if state becomes complex.

---

## PHASE 12: AUTHENTICATION & SECURITY

### IMPLEMENTATION PLAN

1. **Password Hashing (bcrypt)**
   - Pre-save hook: hash password with 10 salt rounds
   - Method: `comparePassword(candidate)` for login

2. **JWT Strategy**
   - Access token: 7 days expiry
   - Store in httpOnly cookie (secure, sameSite)
   - Alternative: localStorage (simpler, less secure)

3. **Middleware Chain**

   ```
   Request → auth middleware → admin middleware → controller
   ```

4. **Security Checklist**
   - [ ] Helmet.js for headers
   - [ ] CORS with whitelist
   - [ ] Rate limiting on auth routes
   - [ ] Input sanitization
   - [ ] Password hashing (bcrypt, 10+ rounds)
   - [ ] JWT secret strong and in .env
   - [ ] No secrets in code
   - [ ] httpOnly cookies
   - [ ] CSRF protection (sameSite)
   - [ ] SQL/NoSQL injection prevention (Mongoose)
   - [ ] XSS protection

---

## PHASE 13: ECOMMERCE LOGIC

### IMPLEMENTATION PRIORITY

1. **Core Flow (V1)**
   - Browse products → Add to cart → Checkout → Order

2. **Enhanced Flow (V2)**
   - Search → Filter → Sort → Product details → Variants → Cart → Coupon → Checkout → Order → Review

3. **Advanced Flow (V3)**
   - Wishlist → Recommendations → Recently viewed → Bulk import → Reports

### Stock Management

```
On order creation:
1. Check stock for all items
2. If insufficient → return 400 error
3. If sufficient → decrement stock
4. If stock < 5 → flag as low stock
5. On order cancellation → restore stock
```

### Coupon Logic

```
Validate:
1. Coupon exists and isActive
2. Within date range
3. Usage limit not exceeded
4. Per-user limit not exceeded
5. Min order amount met
6. Applicable to cart items

Apply:
1. Percentage: subtotal × (discountValue / 100), capped at maxDiscount
2. Fixed: min(discountValue, subtotal)
```

---

## PHASE 14: ADMIN DASHBOARD

### ADMIN MODULES

| Module     | Pages | Key Components                           | APIs                                  |
| ---------- | ----- | ---------------------------------------- | ------------------------------------- |
| Dashboard  | 1     | StatsCard, SalesChart, RecentOrders      | GET /admin/dashboard/\*               |
| Products   | 3     | ProductTable, ProductForm, ImageUploader | GET/POST/PUT/DELETE /admin/products   |
| Categories | 2     | CategoryTable, CategoryForm              | GET/POST/PUT/DELETE /admin/categories |
| Orders     | 2     | OrderTable, OrderDetail                  | GET/PUT /admin/orders                 |
| Customers  | 2     | CustomerTable, CustomerDetail            | GET /admin/customers                  |
| Coupons    | 2     | CouponTable, CouponForm                  | GET/POST/PUT/DELETE /admin/coupons    |
| Reviews    | 1     | ReviewTable, ApproveButton               | GET/PATCH/DELETE /admin/reviews       |
| Banners    | 2     | BannerTable, BannerForm                  | GET/POST/PUT/DELETE /admin/banners    |

---

## PHASE 15: TESTING STRATEGY

### TEST CHECKLIST

#### Backend Testing

- [ ] All endpoints return correct status codes
- [ ] Validation rejects invalid input
- [ ] Auth protects private routes
- [ ] Admin middleware blocks non-admins
- [ ] Pagination works correctly
- [ ] Filtering returns correct results
- [ ] Sorting works all options
- [ ] Search returns relevant results
- [ ] Cart operations work
- [ ] Order creation decrements stock
- [ ] Coupon validation works
- [ ] Error handler catches all errors

#### Frontend Testing

- [ ] All routes render
- [ ] Forms validate input
- [ ] Login/register flow works
- [ ] Protected routes redirect
- [ ] Cart operations work
- [ ] Checkout completes
- [ ] Search works with debounce
- [ ] Filters update results
- [ ] Sorting updates results
- [ ] Pagination works
- [ ] Empty states show
- [ ] Loading states show
- [ ] Error states show
- [ ] Mobile responsive
- [ ] All links work

#### Edge Cases

- [ ] Empty cart checkout
- [ ] Out of stock items
- [ ] Invalid coupon
- [ ] Expired coupon
- [ ] Duplicate email registration
- [ ] Wrong password login
- [ ] Token expiry
- [ ] Invalid product ID
- [ ] Network error handling
- [ ] Large cart (100+ items)

---

## PHASE 16: DEPLOYMENT STRATEGY

### MongoDB Atlas

1. Create cluster (free tier)
2. Create database user
3. Whitelist IPs (0.0.0.0/0 for Railway)
4. Get connection string
5. Add to backend env vars

### Backend (Railway)

1. Connect GitHub repo
2. Set root directory to `/server`
3. Add environment variables
4. Build: `npm install`
5. Start: `node server.js`
6. Get public URL

### Frontend (Vercel)

1. Connect GitHub repo
2. Set root directory to `/client`
3. Build: `npm run build`
4. Output: `dist`
5. Add `VITE_API_URL` env var
6. Deploy

### Post-Deployment

- [ ] Test all flows on production
- [ ] Check CORS
- [ ] Verify env vars
- [ ] Test error handling
- [ ] Check logs
- [ ] Set up custom domain (optional)

---

## PHASE 17: PERFORMANCE

### Worth Implementing (V2)

- Image optimization (Cloudinary auto-format)
- Lazy loading images (`loading="lazy"`)
- API pagination (already in design)
- Database indexes (already in design)
- React.memo for expensive components
- useMemo/useCallback where needed

### Skip for Now (V3)

- Code splitting (nice but complex)
- Redis caching
- CDN
- Service workers
- SSR

---

## PHASE 18: SEO

### React/Vite SEO Strategy

- Use `react-helmet-async` for meta tags
- Semantic HTML (header, main, nav, article, section)
- Alt text on all images
- Descriptive URLs (`/product/cotton-shirt` not `/product/123`)
- Sitemap.xml (static or generated)
- robots.txt
- Open Graph tags
- Structured data (JSON-LD for products)

### Limitations

- No SSR → Google may not index all pages perfectly
- For V3, consider Next.js migration for SEO-critical pages

---

## PHASE 19: PRODUCTION QUALITY REVIEW

### SCORING RUBRIC (100 points)

| Category         | Points | Criteria                           |
| ---------------- | ------ | ---------------------------------- |
| Architecture     | 10     | Clean separation, proper layers    |
| Code Quality     | 10     | Readable, consistent, DRY          |
| Naming           | 5      | Descriptive, consistent            |
| Folder Structure | 5      | Logical, scalable                  |
| Security         | 15     | Auth, validation, sanitization     |
| Database Design  | 10     | Proper schemas, indexes, relations |
| API Design       | 10     | RESTful, consistent, documented    |
| Error Handling   | 5      | Comprehensive, user-friendly       |
| Validation       | 5      | Both client and server             |
| Performance      | 5      | Pagination, indexes, lazy loading  |
| Responsive UI    | 5      | Mobile-first, all breakpoints      |
| Accessibility    | 5      | Semantic HTML, ARIA, keyboard nav  |
| SEO              | 5      | Meta tags, semantic, sitemap       |
| Testing          | 5      | Manual + API tests                 |
| Deployment       | 5      | Working production build           |
| Git History      | 5      | Meaningful commits                 |
| README           | 5      | Comprehensive documentation        |

**Target: 80+ for a strong portfolio project**

---

## PHASE 20: LEARNING SYSTEM

### How I Will Mentor You

**I WILL:**

- Explain concepts before implementation
- Give you requirements and acceptance criteria
- Provide hints when you're stuck
- Review your code thoroughly
- Point out bugs and bad practices
- Ask you questions to test understanding
- Suggest better architecture
- Gradually increase difficulty

**I WILL NOT:**

- Write entire features for you
- Give you code without asking
- Skip explanations
- Let you skip testing
- Let you skip Git commits

---

## PHASE 21: DIFFICULTY PROGRESSION

### Phase 1 (Tasks 1-10): Detailed Guidance

- I explain exactly what to do
- I provide code examples
- I walk you through step by step

### Phase 2 (Tasks 11-25): Architecture + Hints

- I give requirements and architecture
- I provide hints when stuck
- You figure out implementation

### Phase 3 (Tasks 26-50): Requirements + AC Only

- I give professional tickets
- You implement independently
- I review after submission

### Phase 4 (Tasks 51-80): Professional Tickets

- Real-world ticket format
- Minimal guidance
- You're now a junior developer

---

## PHASE 22: SENIOR ENGINEER MODE

When you say **"START TASK"**, I will provide:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK [NUMBER]: [TITLE]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 BUSINESS PURPOSE:
[Why this matters]

🎯 TECHNICAL OBJECTIVE:
[What you'll build]

📝 REQUIREMENTS:
1. [Requirement 1]
2. [Requirement 2]
...

📁 FILES TO CREATE/MODIFY:
- [ ] file/path/one.js
- [ ] file/path/two.js

🧠 CONCEPTS TO UNDERSTAND:
- [Concept 1]
- [Concept 2]

✅ ACCEPTANCE CRITERIA:
- [ ] [Criterion 1]
- [ ] [Criterion 2]

🧪 TESTING CHECKLIST:
- [ ] [Test 1]
- [ ] [Test 2]

💾 GIT COMMIT MESSAGE:
[type]: [description]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

You then:

1. Implement the task yourself
2. Test it
3. Commit it
4. Report back

I then:

1. Review your code
2. Point out issues
3. Suggest improvements
4. Approve before moving to next task

---

## PHASE 23: DEBUGGING MODE

When you report an error, I will:

1. **WHAT:** Explain what the error means
2. **WHY:** Explain why it happened
3. **HOW:** How to investigate
4. **HINT:** Give a hint, not the answer

Only provide the full solution if you're still stuck after multiple hints.

---

## PHASE 24: CODE REVIEW MODE

When you submit code:

```
📝 CODE REVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ GOOD:
- [What you did well]

❌ PROBLEM:
- [Issue found]

🤔 WHY:
- [Why it's a problem]

🔧 FIX:
- [How to fix it]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## PHASE 25: DOCUMENTATION

By project end, you'll have:

- README.md (main project overview)
- client/README.md
- server/README.md
- docs/API.md
- docs/ARCHITECTURE.md
- docs/DATABASE.md
- docs/DEPLOYMENT.md
- docs/TESTING.md

---

## FINAL DELIVERABLE SUMMARY

| #   | Deliverable                     | Status            |
| --- | ------------------------------- | ----------------- |
| 1   | Complete Feature Inventory      | ✅                |
| 2   | MVP/V2/V3 Breakdown             | ✅                |
| 3   | Complete Page/Route Map         | ✅                |
| 4   | Complete User Flow              | ✅                |
| 5   | Complete Admin Flow             | ✅                |
| 6   | Frontend Architecture           | ✅                |
| 7   | Backend Architecture            | ✅                |
| 8   | Database ER Description         | ✅                |
| 9   | Complete Folder Structure       | ✅                |
| 10  | API Route Map                   | ✅                |
| 11  | Authentication Design           | ✅                |
| 12  | State Management Design         | ✅                |
| 13  | GitHub Repo Structure           | ✅                |
| 14  | GitHub Milestones               | ✅                |
| 15  | GitHub Issues (50 initial)      | ✅                |
| 16  | Implementation Order (80 tasks) | ✅                |
| 17  | Testing Strategy                | ✅                |
| 18  | Deployment Strategy             | ✅                |
| 19  | Learning Objectives             | ✅                |
| 20  | Project Complexity              | High (8-12 weeks) |
| 21  | Common Mistakes                 | Listed throughout |
| 22  | Final Review Checklist          | ✅                |

---

## ESTIMATED PROJECT COMPLEXITY

| Phase             | Tasks  | Est. Time (part-time) |
| ----------------- | ------ | --------------------- |
| Foundation        | 8      | 1 week                |
| Models            | 8      | 1 week                |
| Auth              | 8      | 1 week                |
| Product APIs      | 6      | 1 week                |
| Frontend Shell    | 8      | 1.5 weeks             |
| Catalog UI        | 6      | 1.5 weeks             |
| Cart & Checkout   | 8      | 2 weeks               |
| Admin Panel       | 8      | 2 weeks               |
| Advanced Features | 6      | 1.5 weeks             |
| Testing & Polish  | 6      | 1 week                |
| Deployment        | 4      | 0.5 week              |
| Documentation     | 4      | 0.5 week              |
| **TOTAL**         | **80** | **~14 weeks**         |

---

## COMMON MISTAKES TO AVOID

1. ❌ Storing JWT in localStorage (use httpOnly cookies)
2. ❌ Not hashing passwords (always bcrypt)
3. ❌ Exposing secrets in code (use .env)
4. ❌ Not validating on both client AND server
5. ❌ Skipping database indexes (slow queries)
6. ❌ Not handling loading/error/empty states
7. ❌ Putting all state in Redux/Context (keep local when possible)
8. ❌ Not testing edge cases
9. ❌ Copy-pasting code without understanding
10. ❌ Ignoring mobile responsiveness
11. ❌ Not committing regularly
12. ❌ Writing unclear commit messages
13. ❌ Not documenting the API
14. ❌ Over-engineering V1
15. ❌ Not deploying until the end

---

## READY TO BEGIN

The blueprint is complete.

When you're ready, say:

**"START TASK 1"**

And I will give you your first professional task.

Remember: I am your senior engineer. You are the junior. I will guide you, but YOU write the code.
