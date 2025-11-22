import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './AuthPages.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Individual field error states
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [generalError, setGeneralError] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset previous errors
    setEmailError('');
    setPasswordError('');
    setGeneralError('');

    let isValid = true;

    // Email validation
    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }

    // Password validation (same policy as signup)
    const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (!pwdRegex.test(password)) {
      setPasswordError('Password must be at least 8 characters long and include uppercase, lowercase, a number, and a special character');
      isValid = false;
    }

    if (!isValid) return;

    // Simulate login
    try {
      const result = login(email, password);
      if (result.success) {
        navigate('/');
      } else {
        setGeneralError('Invalid email or password');
      }
    } catch (err) {
      setGeneralError('Login failed. Please try again.');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h1>Welcome Back!</h1>
          <p>Sign in to continue shopping</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address <span>*</span></label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            {emailError && <small className="validation-error">{emailError}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password <span>*</span></label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            {passwordError && <small className="validation-error">{passwordError}</small>}
          </div>

          {generalError && <div className="validation-error general">{generalError}</div>}

          <button type="submit" className="auth-button">
            Sign In
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Don’t have an account?{' '}
            <Link to="/signup" className="auth-link">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
