import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { promotionalBanners,topDeals } from '../data/banners';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { MdElectricBolt, MdSportsBaseball } from "react-icons/md";
import { SiStylelint } from "react-icons/si";
import Background from '../assets/background.jpg'
import { FaArrowRight } from 'react-icons/fa';
import './HomePage.css';

const HomePage = () => {
    const [currentPromo, setCurrentPromo] = useState(0);
    const featuredProducts = products.slice(0, 8);
    // Top deals slider state
    const [dealIndex, setDealIndex] = useState(0);
    const [isDealPaused, setIsDealPaused] = useState(false);
    const dealIntervalRef = useRef(null);
    const touchStartX = useRef(null);
    const touchDeltaX = useRef(0);
    const promoTouchStartX = useRef(null);
    const promoTouchDeltaX = useRef(0);
    const SLIDE_INTERVAL = 4000; // ms, changeable

    // Auto-advance promo slider
    useEffect(() => {
        if (!promotionalBanners || promotionalBanners.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentPromo((prev) => (prev + 1) % promotionalBanners.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextPromo = () => {
        setCurrentPromo((p) => (p + 1) % promotionalBanners.length);
    };
    const prevPromo = () => {
        setCurrentPromo((p) => (p - 1 + promotionalBanners.length) % promotionalBanners.length);
    };

    // Auto-advance top deals slider
    useEffect(() => {
        if (!topDeals || topDeals.length <= 1) return;

        // clear existing
        if (dealIntervalRef.current) {
            clearInterval(dealIntervalRef.current);
        }

        if (!isDealPaused) {
            dealIntervalRef.current = setInterval(() => {
                setDealIndex((prev) => (prev + 1) % topDeals.length);
            }, SLIDE_INTERVAL);
        }

        return () => {
            if (dealIntervalRef.current) clearInterval(dealIntervalRef.current);
        };
    }, [isDealPaused]);

    // Controls
    const nextDeal = () => {
        if (!topDeals || topDeals.length === 0) return;
        setDealIndex((d) => (d + 1) % topDeals.length);
    };

    const prevDeal = () => {
        if (!topDeals || topDeals.length === 0) return;
        setDealIndex((d) => (d - 1 + topDeals.length) % topDeals.length);
    };

    const togglePause = () => {
        setIsDealPaused((p) => !p);
    };

    // Touch handlers for swipe support
    const onTouchStart = (e) => {
        touchStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
        touchDeltaX.current = 0;
        setIsDealPaused(true);
    };

    const onTouchMove = (e) => {
        if (touchStartX.current == null) return;
        const currentX = e.touches ? e.touches[0].clientX : e.clientX;
        touchDeltaX.current = currentX - touchStartX.current;
    };

    const onTouchEnd = () => {
        const threshold = 50; // px
        if (touchDeltaX.current > threshold) {
            prevDeal();
        } else if (touchDeltaX.current < -threshold) {
            nextDeal();
        }
        touchStartX.current = null;
        touchDeltaX.current = 0;
        setIsDealPaused(false);
    };

    // keyboard support when banner is focused
    const onBannerKeyDown = (e) => {
        if (e.key === 'ArrowLeft') prevDeal();
        if (e.key === 'ArrowRight') nextDeal();
        if (e.key === ' ' || e.key === 'Spacebar') {
            e.preventDefault();
            togglePause();
        }
    };

    // Promo touch handlers (swipe)
    const onPromoTouchStart = (e) => {
        promoTouchStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
        promoTouchDeltaX.current = 0;
    };

    const onPromoTouchMove = (e) => {
        if (promoTouchStartX.current == null) return;
        const currentX = e.touches ? e.touches[0].clientX : e.clientX;
        promoTouchDeltaX.current = currentX - promoTouchStartX.current;
    };

    const onPromoTouchEnd = () => {
        const threshold = 50;
        if (promoTouchDeltaX.current > threshold) {
            prevPromo();
        } else if (promoTouchDeltaX.current < -threshold) {
            nextPromo();
        }
        promoTouchStartX.current = null;
        promoTouchDeltaX.current = 0;
    };

    return (
        <div className="home-page">
            
            {/* Hero Banner */}
        <section className="hero-section" style={{
        backgroundImage:`linear-gradient(to bottom, #00f261af, rgba(0, 118, 253, 0.53)), url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
        
         }}>
                <div className="hero-image">
                <div
                    className='top-deals-banner'
                    onMouseEnter={() => setIsDealPaused(true)}
                    onMouseLeave={() => setIsDealPaused(false)}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    onKeyDown={onBannerKeyDown}
                    tabIndex={0}
                >
                    <div
                        className='top-deals-track'
                        style={{ transform: `translateX(-${dealIndex * 100}%)` }}
                    >
                        {topDeals.map((deal) => {
                            const { productId } = deal;
                            const product = products.find(p => p.id === productId) || {};
                            return (
                                <Link
                                    key={deal.id}
                                    to={`/products/${productId}`}
                                    className='deal-card'
                                >
                                    <img src={product.image} alt={product.name || deal.title} />
                                    <div className='deal-content'>
                                        <h4>{deal.title}</h4>
                                        <p className='deal-sub'>{deal.discount}</p>
                                        <h5 className='deal-product'>On {product.name}</h5>
                                        <div className='price'>
                                            {typeof product.price === 'number' ? `$${product.price.toFixed(2)}` : ''}
                                        </div>
                                        <div className='deal-actions'>
                                            <span className='deal-btn'>Shop Now <FaArrowRight/></span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="top-deals-controls" aria-hidden={topDeals.length <= 1}>
                        <button className="top-deals-arrow left" onClick={prevDeal} aria-label="Previous deal">‹</button>
                        <button className="top-deals-arrow right" onClick={nextDeal} aria-label="Next deal">›</button>
                    </div>
                </div>
                </div>
            </section>
            {/* Promotional Banners */}
            <section className="promo-section">
             <div className="promo-slider"
                 onTouchStart={onPromoTouchStart}
                 onTouchMove={onPromoTouchMove}
                 onTouchEnd={onPromoTouchEnd}
             >
                    <div
                        className="promo-track"
                        style={{ transform: `translateX(-${currentPromo * 100}%)` }}
                    >
                        {promotionalBanners.map((banner) => (
                            <Link
                                key={banner.id}
                                to={banner.link}
                                className="promo-card"
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
                    {/* promo-controls removed - navigation via swipe and auto-advance only */}
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
                        <div className="category-icon"><MdElectricBolt /></div>
                        <h3>Electronics</h3>
                        <p>Gadgets & Devices</p>
                    </Link>
                    <Link to="/products?category=Fashion" className="category-card">
                        <div className="category-icon"><SiStylelint /></div>
                        <h3>Fashion</h3>
                        <p>Style & Trends</p>
                    </Link>
                    <Link to="/products?category=Sports" className="category-card">
                        <div className="category-icon"><MdSportsBaseball /></div>
                        <h3>Sports</h3>
                        <p>Fitness & Outdoor</p>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;

