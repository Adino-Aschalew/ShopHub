import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Sidebar.css';
import {FaHome,FaBox,FaUser,FaKissBeam, FaShieldAlt } from 'react-icons/fa';
import { MdElectricBolt,MdSportsBaseball,MdMusicNote  } from "react-icons/md";
import { SiStylelint } from "react-icons/si";
import { FaKitchenSet,FaBabyCarriage  } from "react-icons/fa6";
import { IoCarSportOutline } from "react-icons/io5";
import { GiOfficeChair } from "react-icons/gi";





const Sidebar = ({ isOpen, onClose }) => {
  const { user } = useAuth();

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>Shop<span className="logo-accent">Hub</span></h3>
          <button className="sidebar-close" onClick={onClose} aria-label="Close menu">
            ✕
          </button>
        </div>

        <nav className="sidebar-nav">
          {/* Admin Link (top) */}
          <div className="nav-section">
            <Link to="/admin" className="nav-link admin-link" onClick={onClose}>
              <FaShieldAlt/> Admin
            </Link>
          </div>
          {/* Main Menu */}
          <div className="nav-section">
            <Link to="/" className="nav-link" onClick={onClose}>
              <FaHome/> Home
            </Link>
            <Link to="/products" className="nav-link" onClick={onClose}>
              <FaBox/> All Products
            </Link>
          </div>

          {/* Categories */}
          <div className="nav-section">
            <h4>Categories</h4><hr/>
            <Link to="/products?category=Electronics" className="nav-link" onClick={onClose}>
              <MdElectricBolt/> Electronics
            </Link>
            <Link to="/products?category=Fashion" className="nav-link" onClick={onClose}>
              <SiStylelint/> Fashion
            </Link>
            <Link to="/products?category=Sports" className="nav-link" onClick={onClose}>
              <MdSportsBaseball/> Sports
            </Link>
            <Link to="/products?category=Automotive" className="nav-link" onClick={onClose}>
              <IoCarSportOutline/> Automotive
            </Link>
            <Link to="/products?category=Office" className="nav-link" onClick={onClose}>
              <GiOfficeChair/> Office
            </Link>
            <Link to="/products?category=Beauty" className="nav-link" onClick={onClose}>
              <FaKissBeam/> Beauty
            </Link>
              <Link to="/products?category=Baby" className="nav-link" onClick={onClose}>
              <FaBabyCarriage/> Baby
            </Link>
            <Link to="/products?category=Music" className="nav-link" onClick={onClose}>
              <MdMusicNote/> Music
            </Link>
             <Link to="/products?category=Home & Kitchen" className="nav-link" onClick={onClose}>
              <FaKitchenSet/> Home & Kitchen
            </Link>
          </div>

          {/* Quick Links */}
          <div className="nav-section">
            <h4>Quick Links</h4><hr/>
            <Link to="/categories" className="nav-link" onClick={onClose}>
              Categories
            </Link>
            <Link to="/deals" className="nav-link" onClick={onClose}>
              Special Deals
            </Link>
            <Link to="/about" className="nav-link" onClick={onClose}>
              About Us
            </Link>
          </div>

          {/* Customer Service */}
          <div className="nav-section">
            <h4>Customer Service</h4><hr/>
            <Link to="/contact" className="nav-link" onClick={onClose}>
              Contact Us
            </Link>
            <Link to="/shipping" className="nav-link" onClick={onClose}>
              Shipping Info
            </Link>
            <Link to="/returns" className="nav-link" onClick={onClose}>
              Returns
            </Link>
            <Link to="/faq" className="nav-link" onClick={onClose}>
              FAQ
            </Link>
          </div>

          {/* Legal */}
          <div className="nav-section">
            <h4>Legal</h4><hr/>
            <Link to="/privacy" className="nav-link" onClick={onClose}>
              Privacy Policy
            </Link>
            <Link to="/terms" className="nav-link" onClick={onClose}>
              Terms of Service
            </Link>
            <Link to="/cookie" className="nav-link" onClick={onClose}>
              Cookie Policy
            </Link>
            <Link to="/sitemap" className="nav-link" onClick={onClose}>
              Sitemap
            </Link>
          </div>

          {/* User Section */}
          {user && (
            <div className="nav-section user-section">
              <Link to="/profile" className=" user-link" onClick={onClose}>
                <FaUser/> Profile
              </Link>
            </div>
          )}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

