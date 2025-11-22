import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Rating from './Rating';
import { FaShoppingCart } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart, setIsOpen } = useCart();
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, 1);
    setIsOpen(true);
  };

  return (
    <Link to={`/products/${product.id}`} className="product-card-link">
      <div className="product-card">
        <div className="product-image-wrapper">
          {discount > 0 && <span className="discount-badge">-{discount}%</span>}
          {product.image ? (
            <img src={product.image} alt={product.name} className="product-image" />
          ) : (
            <div className="product-image placeholder">No image</div>
          )}
          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            aria-label="Add to cart"
          >
            <FaShoppingCart/>
            Add to Cart
          </button>
        </div>
        
        <div className="product-info">
          <span className="product-brand">{product.brand}</span>
          <h3 className="product-name">{product.name}</h3>
          
          <Rating rating={product.rating} reviews={product.reviews} />
          
          <div className="product-price">
            <span className="current-price">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

