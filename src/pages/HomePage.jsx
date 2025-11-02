import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { heroBanner, promotionalBanners } from '../data/banners';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { MdElectricBolt,MdSportsBaseball } from "react-icons/md";
import { SiStylelint } from "react-icons/si";
import './HomePage.css';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = products.slice(0, 8);

  // Auto-rotate banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalBanners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Banner */}
      <section className="hero-section" style={{ background: heroBanner.bgColor }}>
        <div className="hero-content">
          <h1>{heroBanner.title}</h1>
          <h2>{heroBanner.subtitle}</h2>
          <p>{heroBanner.description}</p>
          <Link to="/products" className="hero-button">
            {heroBanner.ctaText}
          </Link>
        </div>
        <div className="hero-image">
          <img src={heroBanner.image} alt="Summer Sale" />
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="promo-section">
        <div className="promo-slider">
          {promotionalBanners.map((banner, index) => (
            <Link
              key={banner.id}
              to={banner.link}
              className={`promo-card ${index === currentSlide ? 'active' : ''}`}
              style={{ background: banner.bgColor }}
            >
              <div className="promo-content">
                <h3>{banner.title}</h3>
                <p>{banner.subtitle}</p>
              </div>
              <div className="promo-image">
                <img src={banner.image} alt={banner.title} />
              </div>
            </Link>
          ))}
        </div>
        <div className="slider-dots">
          {promotionalBanners.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="section-header">
          <h2>Featured Products</h2>
          <Link to="/products" className="view-all-link">
            View All →
          </Link>
        </div>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="section-header">
          <h2>Shop by Category</h2>
        </div>
        <div className="categories-grid">
          <Link to="/products?category=Electronics" className="category-card">
            <div className="category-icon"><MdElectricBolt/></div>
            <h3>Electronics</h3>
            <p>Gadgets & Devices</p>
          </Link>
          <Link to="/products?category=Fashion" className="category-card">
            <div className="category-icon"><SiStylelint/></div>
            <h3>Fashion</h3>
            <p>Style & Trends</p>
          </Link>
          <Link to="/products?category=Sports" className="category-card">
            <div className="category-icon"><MdSportsBaseball/></div>
            <h3>Sports</h3>
            <p>Fitness & Outdoor</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

