import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products as seedProducts, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

import './ProductListPage.css';

const ProductListPage = () => {
  const [searchParams] = useSearchParams();

  // baseProducts holds the authoritative product list (admin-local overrides or seed)
  const [baseProducts, setBaseProducts] = useState(seedProducts);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [searchTerm, setSearchTerm] = useState('');

  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef(null);

  const sortOptions = [
    { value: 'default', label: 'Default' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest' }
  ];

  const getSortLabel = (val) => {
    const found = sortOptions.find(o => o.value === val);
    return found ? found.label : 'Sort';
  };

  // Close sort dropdown on outside click
  useEffect(() => {
    const onDocClick = (e) => {
      if (isSortOpen && sortRef.current && !sortRef.current.contains(e.target)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [isSortOpen]);

  // Initialize category and search from URL params (run when params change)
  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    const search = searchParams.get('search') || '';

    setSelectedCategory(category);
    setSearchTerm(search);
  }, [searchParams]);

  // Load admin products from localStorage (if present), and listen for admin updates
  useEffect(() => {
    const load = () => {
      try {
        const saved = localStorage.getItem('adminProducts');
        if (saved) {
          const adminList = JSON.parse(saved) || [];
          // Merge seedProducts and adminList: admin items override by id, admin additions included
          const map = {};
          seedProducts.forEach(p => { map[p.id] = p; });
          adminList.forEach(p => { map[p.id] = p; });
          setBaseProducts(Object.values(map));
        } else setBaseProducts(seedProducts);
      } catch (e) {
        setBaseProducts(seedProducts);
      }
    };

    load();
    const onUpdate = () => load();
    window.addEventListener('adminProductsUpdated', onUpdate);
    return () => window.removeEventListener('adminProductsUpdated', onUpdate);
  }, []);

  // Apply filters whenever selectedCategory, searchTerm, sortBy or baseProducts change
  useEffect(() => {
    let filtered = [...baseProducts];

    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(p =>
        (p.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.brand || '').toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      filtered.sort((a, b) => b.id - a.id);
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm, sortBy, baseProducts]);

  return (
    <div className="product-list-page">
      <div className="product-list-container">
        {/* Header */}
        <div className="page-header">
          <h1>
            {selectedCategory !== 'all' ? `${selectedCategory} Products` : 'All Products'}
            {searchTerm && <span className="search-results"> - "{searchTerm}"</span>}
          </h1>
          <p className="results-count">{filteredProducts.length} products found</p>
        </div>
        {/* Filters and Sort */}
        <div className="controls-bar">
          <div className="category-filters">
            {categories.map(cat => (
             <button
               key={cat.value}
               className={`category-filter ${selectedCategory === cat.value ? 'active': ''}`}
               onClick={()=>setSelectedCategory(cat.value)}
             >
                {cat.name}
             </button>
            ))}
          </div>

          <div className="sort-controls">
            <label>Sort by:</label>
            <div className="dropdown" ref={sortRef}>
              <button
                type="button"
                className="dropdown-btn"
                aria-haspopup="true"
                aria-expanded={isSortOpen}
                onClick={() => setIsSortOpen(prev => !prev)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setIsSortOpen(false);
                }}
              >
                {getSortLabel(sortBy)} <span className="caret"><IoIosArrowDropdownCircle/></span>
              </button>

              {isSortOpen && (
                <ul className="dropdown-menu" role="menu">
                  {sortOptions.map(opt => (
                    <li key={opt.value} role="none">
                      <button
                        role="menuitem"
                        type="button"
                        className={`dropdown-item ${sortBy === opt.value ? 'active' : ''}`}
                        onClick={() => { setSortBy(opt.value); setIsSortOpen(false); }}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="no-products">
            <p>No products found. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListPage;

