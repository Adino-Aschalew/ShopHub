import './PrivacyPage.css';

const PrivacyPage = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: January 1, 2024</p>

        <div className="privacy-section">
          <h2>Introduction</h2>
          <p>At ShopHub, we take your privacy seriously. This policy explains how we collect, use, protect, and share your personal information when you use our website.</p>
        </div>

        <div className="privacy-section">
          <h2>Information We Collect</h2>
          <div className="info-type">
            <h3>Personal Information</h3>
            <ul>
              <li>Name and contact information (email, phone, address)</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Account credentials</li>
              <li>Order history and preferences</li>
            </ul>
          </div>
          <div className="info-type">
            <h3>Automatically Collected Information</h3>
            <ul>
              <li>Device information (IP address, browser type)</li>
              <li>Usage data (pages visited, time spent)</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Location data (if permitted)</li>
            </ul>
          </div>
        </div>

        <div className="privacy-section">
          <h2>How We Use Your Information</h2>
          <ul>
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about orders, products, and services</li>
            <li>Improve our website and shopping experience</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Prevent fraud and ensure security</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>Information Sharing</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul>
            <li>Service providers who help us operate our business</li>
            <li>Shipping and payment processors</li>
            <li>Law enforcement when required by law</li>
            <li>Third parties with your explicit consent</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
        </div>

        <div className="privacy-section">
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Data portability</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>Cookies</h2>
          <p>We use cookies and similar technologies to enhance your browsing experience. For more information, please see our <a href="/cookie">Cookie Policy</a>.</p>
        </div>

        <div className="privacy-section">
          <h2>Children's Privacy</h2>
          <p>Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.</p>
        </div>

        <div className="privacy-section">
          <h2>Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
        </div>

        <div className="privacy-section">
          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please <a href="/contact">contact us</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
