import { useState } from 'react';
import './FAQPage.css';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I place an order?",
      answer: "To place an order, simply browse our products, add items to your cart, and proceed to checkout. You'll need to create an account or sign in, provide shipping information, and complete payment."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. All payments are processed securely."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days. Express shipping takes 2-3 business days, and overnight shipping is available for next-day delivery when ordered before 2 PM EST."
    },
    {
      question: "Can I return or exchange items?",
      answer: "Yes! We offer a 30-day money-back guarantee. Items must be in original, unused condition with tags and packaging. Visit our Returns page for more details."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 50 countries worldwide. International shipping typically takes 10-15 business days. Please note that customs fees may apply."
    },
    {
      question: "Is my personal information secure?",
      answer: "Absolutely! We use industry-standard encryption and security measures to protect your personal and payment information. We never share your data with third parties without your consent."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can track your package in real-time using the tracking link in the email."
    },
    {
      question: "What if I receive a damaged item?",
      answer: "If you receive a damaged or defective item, please contact us immediately. We'll arrange for a free replacement or full refund, including return shipping costs."
    },
    {
      question: "Can I cancel my order?",
      answer: "Orders can be cancelled within 1 hour of placement if they haven't been processed yet. Contact customer service for assistance."
    },
    {
      question: "Do you offer gift wrapping?",
      answer: "Yes! We offer gift wrapping services for an additional fee. You can select this option during checkout and add a personal message."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        <p className="faq-subtitle">Find answers to common questions about shopping at ShopHub</p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-help">
          <h2>Still have questions?</h2>
          <p>Can't find the answer you're looking for? We're here to help!</p>
          <a href="/contact" className="contact-btn">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
