import { Link } from 'react-router-dom';
import './SitemapPage.css';

const SitemapPage = () => {
  return (
    <div className="sitemap-page">
      <div className="sitemap-container">
        <h1>Site Map</h1>
        <p className="sitemap-subtitle">Navigate through all pages of our website</p>

        <div className="sitemap-content">
          <div className="sitemap-section">
            <h2>Main Pages</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/categories">Categories</Link></li>
              <li><Link to="/deals">Special Deals</Link></li>
            </ul>
          </div>

          <div className="sitemap-section">
            <h2>Product Categories</h2>
            <ul>
              <li><Link to="/products?category=Electronics">Electronics</Link></li>
              <li><Link to="/products?category=Fashion">Fashion</Link></li>
              <li><Link to="/products?category=Sports">Sports</Link></li>
              <li><Link to="/products?category=Home & Kitchen">Home & Kitchen</Link></li>
              <li><Link to="/products?category=Automotive">Automotive</Link></li>
              <li><Link to="/products?category=Beauty">Beauty</Link></li>
              <li><Link to="/products?category=Baby">Baby</Link></li>
              <li><Link to="/products?category=Music">Music</Link></li>
              <li><Link to="/products?category=Office">Office</Link></li>
            </ul>
          </div>

          <div className="sitemap-section">
            <h2>Account</h2>
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/profile">My Profile</Link></li>
            </ul>
          </div>

          <div className="sitemap-section">
            <h2>Customer Service</h2>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/shipping">Shipping Info</Link></li>
              <li><Link to="/returns">Returns</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="sitemap-section">
            <h2>Company Information</h2>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/cookie">Cookie Policy</Link></li>
              <li><Link to="/sitemap">Sitemap</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;

