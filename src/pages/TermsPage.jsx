import './TermsPage.css';

const TermsPage = () => {
  return (
    <div className="terms-page">
      <div className="terms-container">
        <h1>Terms of Service</h1>
        <p className="last-updated">Last Updated: January 1, 2024</p>

        <div className="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using ShopHub's website, you accept and agree to be bound by the terms and provision of this agreement.</p>
        </div>

        <div className="terms-section">
          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials on ShopHub's website for personal, non-commercial transitory viewing only.</p>
        </div>

        <div className="terms-section">
          <h2>3. User Accounts</h2>
          <p>When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account password.</p>
        </div>

        <div className="terms-section">
          <h2>4. Products and Pricing</h2>
          <ul>
            <li>All prices are listed in USD</li>
            <li>We reserve the right to modify prices at any time</li>
            <li>Product descriptions and images are for reference only</li>
            <li>Availability is subject to change</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>5. Payment Terms</h2>
          <p>By placing an order, you agree to pay the specified price plus applicable taxes and shipping fees. All payments are processed securely through our payment gateway.</p>
        </div>

        <div className="terms-section">
          <h2>6. Shipping and Delivery</h2>
          <p>Shipping terms, delivery times, and costs are detailed in our <a href="/shipping">Shipping Information</a> page. We are not responsible for delays caused by carriers.</p>
        </div>

        <div className="terms-section">
          <h2>7. Returns and Refunds</h2>
          <p>Our return and refund policy is available in our <a href="/returns">Returns Policy</a>. All returns must comply with the stated requirements.</p>
        </div>

        <div className="terms-section">
          <h2>8. Intellectual Property</h2>
          <p>All content, trademarks, and intellectual property on this website are the property of ShopHub and protected by copyright laws.</p>
        </div>

        <div className="terms-section">
          <h2>9. Limitation of Liability</h2>
          <p>ShopHub shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the website.</p>
        </div>

        <div className="terms-section">
          <h2>10. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the new terms.</p>
        </div>

        <div className="terms-section">
          <h2>11. Contact Information</h2>
          <p>For questions about these Terms of Service, please <a href="/contact">contact us</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;

