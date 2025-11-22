import './ShippingPage.css';
import {FaBox,FaQuestion } from 'react-icons/fa';
import { GiWorld } from "react-icons/gi";
import { LuNotebookPen } from "react-icons/lu";
import { IoIosWarning } from "react-icons/io";




const ShippingPage = () => {
  return (
    <div className="shipping-page">
      <div className="shipping-container">
        <h1>Shipping Information</h1>

        <div className="shipping-section">
          <h2><FaBox/> Shipping Options</h2>
          <div className="info-grid">
            <div className="info-item">
              <h3>Standard Shipping</h3>
              <p><strong>Delivery Time:</strong> 5-7 business days</p>
              <p><strong>Cost:</strong> $9.99</p>
              <p>Free for orders over $75</p>
            </div>
            <div className="info-item">
              <h3>Express Shipping</h3>
              <p><strong>Delivery Time:</strong> 2-3 business days</p>
              <p><strong>Cost:</strong> $19.99</p>
              <p>Free for orders over $150</p>
            </div>
            <div className="info-item">
              <h3>Overnight Shipping</h3>
              <p><strong>Delivery Time:</strong> 1 business day</p>
              <p><strong>Cost:</strong> $39.99</p>
              <p>Order before 2 PM EST</p>
            </div>
          </div>
        </div>

        <div className="shipping-section">
          <h2><GiWorld/> International Shipping</h2>
          <p>We ship to over 50 countries worldwide!</p>
          <ul>
            <li>International delivery: 10-15 business days</li>
            <li>Customs fees may apply</li>
            <li>Tracking included on all international orders</li>
          </ul>
        </div>

        <div className="shipping-section">
          <h2><LuNotebookPen/> Order Tracking</h2>
          <p>Once your order ships, you'll receive a tracking number via email. You can track your package in real-time on our website.</p>
        </div>

        <div className="shipping-section">
          <h2><IoIosWarning/> Important Notes</h2>
          <ul>
            <li>Processing time: 1-2 business days</li>
            <li>No shipping on holidays</li>
            <li>Delivery dates are estimates, not guarantees</li>
            <li>We're not responsible for delays caused by carriers</li>
          </ul>
        </div>

        <div className="shipping-section">
          <h2><FaQuestion/> Questions?</h2>
          <p>Have questions about shipping? <a href="/contact">Contact us</a> and we'll be happy to help!</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;

