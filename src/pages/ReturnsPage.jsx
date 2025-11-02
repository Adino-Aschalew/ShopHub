import './ReturnsPage.css';

const ReturnsPage = () => {
  return (
    <div className="returns-page">
      <div className="returns-container">
        <h1>Returns & Refunds Policy</h1>

        <div className="returns-section">
          <h2>🔄 Return Policy</h2>
          <p>We want you to be completely satisfied with your purchase. If you're not happy, we'll make it right!</p>
          
          <div className="highlight-box">
            <h3>30-Day Money-Back Guarantee</h3>
            <p>You have <strong>30 days</strong> from the date of delivery to return any item for a full refund.</p>
          </div>
        </div>

        <div className="returns-section">
          <h2>✅ Eligible for Returns</h2>
          <ul>
            <li>Items in original, unused condition</li>
            <li>Original packaging included</li>
            <li>All tags and labels attached</li>
            <li>Receipt or order confirmation</li>
          </ul>
        </div>

        <div className="returns-section">
          <h2>❌ Not Eligible for Returns</h2>
          <ul>
            <li>Items damaged by misuse or normal wear</li>
            <li>Products without original packaging</li>
            <li>Perishable or personalized items</li>
            <li>Items purchased from clearance sale</li>
          </ul>
        </div>

        <div className="returns-section">
          <h2>📋 How to Return</h2>
          <ol>
            <li>Log into your account or visit our returns portal</li>
            <li>Select the items you want to return</li>
            <li>Print the prepaid return shipping label</li>
            <li>Package your items securely</li>
            <li>Drop off at any authorized carrier location</li>
          </ol>
        </div>

        <div className="returns-section">
          <h2>💰 Refund Processing</h2>
          <ul>
            <li>Refunds processed within 5-7 business days</li>
            <li>Refund method: original payment method</li>
            <li>Shipping costs are non-refundable unless item is defective</li>
            <li>You'll receive email confirmation when refund is processed</li>
          </ul>
        </div>

        <div className="returns-section">
          <h2>📦 Exchanges</h2>
          <p>Need a different size or color? Exchanges are free! Simply return the original item and place a new order for the item you want.</p>
        </div>

        <div className="returns-section">
          <h2>❓ Questions?</h2>
          <p>Need help with a return? <a href="/contact">Contact our support team</a> and we'll assist you!</p>
        </div>
      </div>
    </div>
  );
};

export default ReturnsPage;

