import { useEffect, useState } from 'react';
import { products as seedProducts } from '../data/products';
import './AdminPage.css';

const TABS = {
  PRODUCTS: 'Products',
  ORDERS: 'Orders',
  CUSTOMERS: 'Customers'
};

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState(TABS.PRODUCTS);

  // Products stored in localStorage for admin edits; fallback to seed data
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('adminProducts');
    if (saved) setProducts(JSON.parse(saved));
    else setProducts(seedProducts.slice(0, 12));
  }, []);

  useEffect(() => {
    localStorage.setItem('adminProducts', JSON.stringify(products));
  }, [products]);

  const addEmptyProduct = () => {
    const p = {
      id: Date.now(),
      name: 'New Product',
      price: 0,
      category: 'uncategorized',
      image: ''
    };
    setProducts(prev => [p, ...prev]);
    setEditing(p.id);
    // notify other parts of the app that products changed
    window.dispatchEvent(new CustomEvent('adminProductsUpdated'));
  };

  const saveProduct = (id, updates) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
    setEditing(null);
    // notify other parts of the app that products changed
    window.dispatchEvent(new CustomEvent('adminProductsUpdated'));
  };

  const removeProduct = (id) => {
    if (!confirm('Delete product? This is irreversible in local admin storage.')) return;
    setProducts(prev => prev.filter(p => p.id !== id));
    // notify other parts of the app that products changed
    window.dispatchEvent(new CustomEvent('adminProductsUpdated'));
  };

  // Orders & customers are mocked via localStorage or empty lists
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem('adminOrders');
    const savedCustomers = localStorage.getItem('adminCustomers');
    setOrders(savedOrders ? JSON.parse(savedOrders) : []);
    setCustomers(savedCustomers ? JSON.parse(savedCustomers) : (JSON.parse(localStorage.getItem('user') || 'null') ? [JSON.parse(localStorage.getItem('user'))] : []));
  }, []);

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="admin-actions">
          <button className="btn" onClick={() => setActiveTab(TABS.PRODUCTS)}>Products</button>
          <button className="btn" onClick={() => setActiveTab(TABS.ORDERS)}>Orders</button>
          <button className="btn" onClick={() => setActiveTab(TABS.CUSTOMERS)}>Customers</button>
        </div>
      </div>

      <div className="admin-body">
        {activeTab === TABS.PRODUCTS && (
          <section className="admin-products">
            <div className="products-toolbar">
              <button className="btn primary" onClick={addEmptyProduct}>+ New Product</button>
            </div>

            <div className="products-list">
              {products.map(p => (
                <div key={p.id} className="product-row">
                  {editing === p.id ? (
                    <ProductEditor product={p} onSave={saveProduct} onCancel={() => setEditing(null)} />
                  ) : (
                    <>
                      <div className="product-meta">
                        <div className="thumb">{p.image ? <img src={p.image} alt="thumb" /> : <div className="no-thumb">No image</div>}</div>
                        <div>
                          <div className="name">{p.name}</div>
                          <div className="meta">{p.category} • ${p.price}</div>
                        </div>
                      </div>
                      <div className="product-actions">
                        <button className="btn" onClick={() => setEditing(p.id)}>Edit</button>
                        <button className="btn danger" onClick={() => removeProduct(p.id)}>Delete</button>
                      </div>
                    </>
                  )}
                </div>
              ))}
              {products.length === 0 && <p>No products. Add new products to begin.</p>}
            </div>
          </section>
        )}

        {activeTab === TABS.ORDERS && (
          <section className="admin-orders">
            <h2>Orders</h2>
            {orders.length === 0 ? (
              <p>No orders yet. Orders created via checkout will appear here.</p>
            ) : (
              <ul>
                {orders.map(o => (
                  <li key={o.id}>Order #{o.id} — ${o.total} — {o.status}</li>
                ))}
              </ul>
            )}
          </section>
        )}

        {activeTab === TABS.CUSTOMERS && (
          <section className="admin-customers">
            <h2>Customers</h2>
            {customers.length === 0 ? (
              <p>No customers found.</p>
            ) : (
              <div className="customers-grid">
                {customers.map(c => (
                  <div className="customer-card" key={c.id || c.email}>
                    <div className="avatar"><img src={c.avatar || 'https://i.pravatar.cc/80'} alt="avatar" /></div>
                    <div className="info">
                      <div className="name">{c.name || c.email}</div>
                      <div className="email">{c.email}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
};

const ProductEditor = ({ product, onSave, onCancel }) => {
  const [form, setForm] = useState({ ...product });
  return (
    <div className="product-editor">
      <input value={form.name} onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))} />
      <input value={form.category} onChange={(e) => setForm(prev => ({ ...prev, category: e.target.value }))} />
      <input type="number" value={form.price} onChange={(e) => setForm(prev => ({ ...prev, price: Number(e.target.value) }))} />
      <input value={form.image} onChange={(e) => setForm(prev => ({ ...prev, image: e.target.value }))} placeholder="image url" />
      <div className="editor-actions">
        <button className="btn primary" onClick={() => onSave(product.id, form)}>Save</button>
        <button className="btn" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default AdminPage;
