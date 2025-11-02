import './AboutPage.css';
import { FaFacebookF,FaTwitter,FaInstagram,FaYoutube,FaLinkedin }  from 'react-icons/fa';
import { FaShippingFast, } from 'react-icons/fa';
import { FaSackDollar } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiSelect } from "react-icons/gi";




const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About ShopHub</h1>
        <p className="about-subtitle">Your trusted online shopping destination since 2024</p>

        <div className="about-hero">
          <div className="hero-content">
            <h2>Our Story</h2>
            <p>ShopHub was founded with a simple mission: to make online shopping easier, faster, and more enjoyable. We believe everyone deserves access to quality products at fair prices, delivered right to their door.</p>
          </div>
        </div>

        <div className="about-section">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><GiSelect/></div>
              <h3>Wide Selection</h3>
              <p>Thousands of products across 10+ categories to meet all your needs</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaSackDollar/></div>
              <h3>Best Prices</h3>
              <p>Competitive pricing and daily deals to help you save money</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaShippingFast/></div>
              <h3>Fast Shipping</h3>
              <p>Multiple shipping options with reliable delivery to your door</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><RiSecurePaymentLine/></div>
              <h3>Secure & Safe</h3>
              <p>Your data and payments are protected with top-notch security</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Customer First:</strong> Your satisfaction is our priority</li>
            <li><strong>Quality Products:</strong> We only offer products we'd buy ourselves</li>
            <li><strong>Transparency:</strong> Clear policies, honest pricing, no hidden fees</li>
            <li><strong>Community:</strong> Supporting our local communities and charities</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Join Our Community</h2>
          <p>Connect with us on social media for the latest deals, product launches, and exclusive offers!</p>
          <div className="social-links">
            <a href="#" className="social-btn"><FaFacebookF/> Facebook</a>
            <a href="#" className="social-btn"><FaTwitter/> Twitter</a>
            <a href="#" className="social-btn"><FaInstagram/> Instagram</a>
            <a href="#" className="social-btn"><FaYoutube/> YouTube</a>
            <a href="#" className="social-btn"><FaLinkedin/> Linkedin</a>
          </div>
        </div>

        <div className="about-section">
          <h2>Questions?</h2>
          <p>Have questions or want to know more? <a href="/contact">Get in touch with us</a> and we'll be happy to help!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
