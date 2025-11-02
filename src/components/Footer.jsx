import { Link } from 'react-router-dom';
import {FaFacebookF,FaTwitter,FaInstagram,FaYoutube} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Shop<span className="logo-accent">Hub</span></h3>
          <p>Your trusted online shopping destination. Find the best deals on electronics, fashion, sports, and more!</p>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Facebook"><FaFacebookF/></a>
            <a href="#" className="social-icon" aria-label="Twitter"><FaTwitter/></a>
            <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram/></a>
            <a href="#" className="social-icon" aria-label="Youtube"><FaYoutube/></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/products">All Products</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/deals">Special Deals</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/shipping">Shipping Info</Link></li>
            <li><Link to="/returns">Returns</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/cookie">Cookie Policy</Link></li>
            <li><Link to="/sitemap">Sitemap</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 ShopHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

