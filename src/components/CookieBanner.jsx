import { useEffect, useState } from 'react';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) setVisible(true);
    } catch (e) {
      // ignore storage errors and show banner
      setVisible(true);
    }
  }, []);

  // Prevent background scroll while visible
  useEffect(() => {
    const previous = document.body.style.overflow;
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = previous || '';
    }
    return () => {
      document.body.style.overflow = previous || '';
    };
  }, [visible]);

  const accept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-modal="true" aria-label="Cookie policy">
      <div
        className="cookie-content"
        onClick={(e) => e.stopPropagation()} /* don't close when clicking dialog */
      >
        <p>
          We use cookies to improve your experience. By accepting, you agree to our use of cookies. You can reject
          non-essential cookies.
        </p>
        <div className="cookie-actions">
          <button className="cookie-btn cookie-reject" onClick={reject}>Reject All</button>
          <button className="cookie-btn cookie-accept" onClick={accept}>Accept</button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
