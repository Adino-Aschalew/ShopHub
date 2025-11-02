import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { reviews } from '../data/reviews';
import { useCart } from '../context/CartContext';
import Rating from '../components/Rating';
import './ProductDetailsPage.css';
import { FaShoppingCart } from 'react-icons/fa';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, setIsOpen } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="product-details-page">
        <div className="loading-container">
          <p>Product not found</p>
          <button onClick={() => navigate('/products')} className="back-btn">
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const productReviews = reviews[product.id] || [];

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowSuccess(true);
    setIsOpen(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleQuantityChange = (delta) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  return (
    <div className="product-details-page">
      <div className="product-details-container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <button onClick={() => navigate('/products')}>← Back to Products</button>
        </div>

        <div className="product-main">
          {/* Image Gallery */}
          <div className="product-gallery">
            <div className="main-image">
              <img src={product.gallery[selectedImage]} alt={product.name} />
            </div>
            <div className="thumbnail-images">
              {product.gallery.map((img, index) => (
                <button
                  key={index}
                  className={`thumbnail ${index === selectedImage ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={img} alt={`${product.name} ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <span className="product-brand">{product.brand}</span>
            <h1>{product.name}</h1>
            
            <Rating rating={product.rating} reviews={product.reviews} />

            <div className="price-section">
              <span className="current-price">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                  <span className="discount">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                </>
              )}
            </div>

            <div className="product-description">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>

            {/* Quantity Selector */}
            <div className="quantity-section">
              <label>Quantity:</label>
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(-1)} className="qty-btn">−</button>
                <span className="qty-value">{quantity}</span>
                <button onClick={() => handleQuantityChange(1)} className="qty-btn">+</button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="action-buttons">
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                <FaShoppingCart/> Add to Cart
              </button>
              {showSuccess && <div className="success-message">✓ Added to cart!</div>}
            </div>

            {/* Product Details */}
            <div className="product-specs">
              <div className="spec-item">
                <span className="spec-label">Brand:</span>
                <span className="spec-value">{product.brand}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Category:</span>
                <span className="spec-value">{product.category}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Availability:</span>
                <span className="spec-value">{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        {productReviews.length > 0 && (
          <div className="reviews-section">
            <h2>Customer Reviews ({productReviews.length})</h2>
            <div className="reviews-list">
              {productReviews.map(review => (
                <div key={review.id} className="review-card">
                  <div className="review-header">
                    <img src={review.avatar} alt={review.username} className="review-avatar" />
                    <div>
                      <div className="review-username">{review.username}</div>
                      <Rating rating={review.rating} />
                    </div>
                    <div className="review-date">{review.date}</div>
                  </div>
                  <p className="review-comment">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsPage;

