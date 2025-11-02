import './CookiePage.css';

const CookiePage = () => {
  return (
    <div className="cookie-page">
      <div className="cookie-container">
        <h1>Cookie Policy</h1>
        <p className="last-updated">Last Updated: January 1, 2024</p>

        <div className="cookie-section">
          <h2>What Are Cookies?</h2>
          <p>Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and improve our services.</p>
        </div>

        <div className="cookie-section">
          <h2>Types of Cookies We Use</h2>
          
          <div className="cookie-type">
            <h3>Essential Cookies</h3>
            <p>These cookies are necessary for the website to function properly. They enable core functionality such as shopping cart, user authentication, and security.</p>
          </div>

          <div className="cookie-type">
            <h3>Analytics Cookies</h3>
            <p>We use these cookies to understand how visitors interact with our website. They help us improve our website's performance and user experience.</p>
          </div>

          <div className="cookie-type">
            <h3>Functionality Cookies</h3>
            <p>These cookies allow the website to remember choices you make and provide enhanced, personalized features.</p>
          </div>

          <div className="cookie-type">
            <h3>Marketing Cookies</h3>
            <p>These cookies track your browsing habits to display relevant advertisements and improve your shopping experience.</p>
          </div>
        </div>

        <div className="cookie-section">
          <h2>Managing Your Cookie Preferences</h2>
          <p>You can control and manage cookies in various ways. Most browsers allow you to:</p>
          <ul>
            <li>Block all cookies</li>
            <li>Block cookies from specific websites</li>
            <li>Delete cookies from your device</li>
            <li>Set your browser to warn you before accepting cookies</li>
          </ul>
        </div>

        <div className="cookie-section">
          <h2>Third-Party Cookies</h2>
          <p>Some cookies on our website are placed by third-party services such as:</p>
          <ul>
            <li>Google Analytics - Website analytics</li>
            <li>Payment processors - Secure transactions</li>
            <li>Social media platforms - Social sharing features</li>
          </ul>
        </div>

        <div className="cookie-section">
          <h2>Questions?</h2>
          <p>If you have any questions about our use of cookies, please <a href="/contact">contact us</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default CookiePage;

