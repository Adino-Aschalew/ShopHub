import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { FaShoppingCart,FaSearch,FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ onMenuClick }) => {
  const { user, logout } = useAuth();
  const { getTotalItems, isOpen, setIsOpen } = useCart();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);

  const cartItems = getTotalItems();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    navigate('/');
  };
  useEffect(() =>{
    const handleClickOutside = (event) =>{
      if(!event.target.closet('.user-menu-wrapper')){
        setShowUserMenu(false);
      }
    }
    document.addEventListener('click',handleClickOutside);
    return() =>{
      document.removeEventListener('click',handleClickOutside);
    }
  },[])

  return (
    <nav className="navbar">
      <button className="sidebar-toggle" onClick={onMenuClick} aria-label="Toggle menu">
          <FaBars/>
        </button>
      <div className="navbar-container">
        {/* Menu Toggle Button */}
        
        
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Shop<span className="logo-accent">Hub</span></span>
        </Link>

        {/* Search Bar */}
        <form className="navbar-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            <FaSearch/>
          </button>
        </form>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/categories" className="nav-link">Categories</Link>
        </div>

        {/* Right Side Icons */}
        <div className="navbar-icons">
          {/* Cart Icon */}
          <button 
            className="cart-icon-button" 
            onClick={() => setIsOpen(true)}
            aria-label="Shopping cart"
          >
            <FaShoppingCart/>
            {cartItems > 0 && <span className="cart-badge">{cartItems}</span>}
          </button>

          {/* User Icon */}

          {user ? (
            <div className="user-menu-wrapper">
              <button 
                className="user-icon-button"
                onClick={() => setShowUserMenu(!showUserMenu)}
                aria-label="User menu"
              >
                <img src={user.avatar} alt={user.name} className="user-avatar" />
              </button>
              {showUserMenu && (
                <div className="user-dropdown">
                  <Link to="/profile" className="dropdown-item" onClick={() => setShowUserMenu(false)}>
                    Profile
                  </Link>
                  <Link to="/orders" className="dropdown-item" onClick={() => setShowUserMenu(false)}>
                    My Orders
                  </Link>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="login-button">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

