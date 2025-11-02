# ShopHub - E-Commerce Web Application

A fully responsive, modern e-commerce web application built with React.js and pure CSS. This is a 100% frontend application with simulated data - no backend required!

## Features

### 🛍️ Core Functionality
- **Product Browsing**: Browse products by category or search
- **Product Details**: View detailed product information with image gallery
- **Shopping Cart**: Add/remove items, update quantities
- **User Authentication**: Login and Signup with frontend validation
- **Payment Simulation**: Complete checkout flow with form validation
- **User Profile**: Manage account details and view order history
- **Responsive Design**: Beautiful layouts for mobile, tablet, and desktop

### 🎨 Design & UX
- **Modern UI**: Colorful, gradient-based design inspired by AliExpress
- **Smooth Animations**: Hover effects, transitions, and animations
- **Interactive Components**: Star ratings, modals, cart sidebar
- **Hero Banners**: Rotating promotional carousel
- **Category Filters**: Easy product filtering and sorting
- **Live Search**: Filter products as you type

### 📱 Responsive Breakpoints
- **Mobile**: Optimized for 320px - 640px
- **Tablet**: Optimized for 640px - 968px
- **Desktop**: Optimized for 968px and above

## Tech Stack

- **React 19**: Latest React with functional components and hooks
- **React Router v6**: Client-side routing
- **Vite**: Fast development build tool
- **Pure CSS**: No frameworks, fully custom styles
- **Context API**: State management for cart and auth
- **LocalStorage**: Persistent cart and user data

## Project Structure

```
ecommerce-app/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Cart.jsx
│   │   ├── Modal.jsx
│   │   ├── Rating.jsx
│   │   └── *.css files
│   ├── pages/            # Page components
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── SignupPage.jsx
│   │   ├── ProductListPage.jsx
│   │   ├── ProductDetailsPage.jsx
│   │   ├── PaymentPage.jsx
│   │   ├── ProfilePage.jsx
│   │   └── *.css files
│   ├── context/          # React Context providers
│   │   ├── AuthContext.jsx
│   │   └── CartContext.jsx
│   ├── data/             # Mock data
│   │   ├── products.js
│   │   ├── banners.js
│   │   └── reviews.js
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html
├── package.json
└── vite.config.js
```

## Installation & Setup

1. **Install dependencies**:
```bash
npm install
```

2. **Start development server**:
```bash
npm run dev
```

3. **Build for production**:
```bash
npm run build
```

4. **Preview production build**:
```bash
npm run preview
```

## Usage Guide

### Demo Credentials
- **Login**: Use any email and password (minimum 6 characters)
- **No real authentication** - all data is simulated

### Pages

#### 🏠 Home Page (`/`)
- Hero banner with call-to-action
- Rotating promotional carousels
- Featured products grid
- Category shortcuts

#### 📦 Products Page (`/products`)
- View all products
- Filter by category
- Sort by price, rating, newest
- Live search functionality

#### 🔍 Product Details (`/products/:id`)
- Image gallery with thumbnails
- Product information and description
- Customer reviews
- Quantity selector
- Add to cart

#### 🛒 Cart
- Click cart icon in navbar to open
- View selected items
- Update quantities
- Remove items
- Proceed to checkout

#### 💳 Payment Page (`/payment`)
- Order summary
- Payment form with validation
- Success screen
- Automatic redirect to profile

#### 👤 Profile Page (`/profile`)
- View and edit account details
- Order history
- Logout option

#### 🔐 Login/Signup (`/login`, `/signup`)
- Frontend form validation
- Auto-generate user avatar
- Persist login state

## Key Features Explained

### Cart Management
- Cart persists in localStorage
- Real-time cart badge count
- Sidebar cart with smooth animations
- Empty cart handling

### Authentication
- Simulated login/signup
- Protected routes for payment and profile
- Auto-redirect to login when needed
- User avatar generation

### Product Filtering
- Category-based filtering
- Price sorting (low to high, high to low)
- Rating-based sorting
- Search term filtering
- URL-based filter state

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized images and assets

## Customization

### Colors
The app uses a gradient-based color scheme. Main colors:
- Primary: `#667eea` (Purple)
- Secondary: `#764ba2` (Deep Purple)
- Accent: `#ffd700` (Gold)
- Success: `#2ed573` (Green)
- Danger: `#ff4757` (Red)

### Add Products
Edit `src/data/products.js` to add/remove products:
```javascript
{
  id: 13,
  name: "Your Product",
  price: 99.99,
  // ... other fields
}
```

### Modify Categories
Edit categories in `src/data/products.js`:
```javascript
export const categories = [
  { name: "All", value: "all" },
  { name: "Your Category", value: "YourCategory" }
];
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Notes

- All data is client-side only
- No API calls or backend integration
- Cart and auth state persists via localStorage
- Images use Unsplash and Pravatar for demo purposes
- Fully functional UI/UX despite being frontend-only

## Future Enhancements

- [ ] Wishlist functionality
- [ ] Product comparison
- [ ] More filter options
- [ ] Dark mode theme
- [ ] Product recommendations
- [ ] Newsletter subscription
- [ ] Social media integration

## License

This project is open source and available for educational purposes.

## Credits

- React team for amazing framework
- Vite for lightning-fast dev experience
- Unsplash for high-quality images
- Design inspiration from modern e-commerce platforms

---

**Built with ❤️ using React and pure CSS**
