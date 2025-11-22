import './Rating.css';
import { useState } from 'react';
import {FaStar,FaStarHalfAlt,FaRegStar} from 'react-icons/fa';

const Rating = ({ rating, reviews, interactive = false, onRatingChange }) => {
  // Ensure rating is a safe number between 0 and 5
  let r = Number(rating);
  if (!isFinite(r) || isNaN(r)) r = 0;
  r = Math.max(0, Math.min(5, r));

  const fullStars = Math.floor(r);
  const hasHalfStar = r - fullStars >= 0.5;
  const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));

  const handleClick = (value) => {
    if (interactive && onRatingChange) {
      onRatingChange(value);
    }
  };

  return (
    <div className="rating">
      <div className="stars">
        {[...Array(fullStars)].map((_, i) => (
          <span 
            key={i} 
            className="star full"
            onClick={() => handleClick(i + 1)}
            style={{ cursor: interactive ? 'pointer' : 'default' }}
          >
            <FaStar/>
          </span>
        ))}
        {hasHalfStar && (
          <span 
            className="star half"
            onClick={() => handleClick(fullStars + 1)}
            style={{ cursor: interactive ? 'pointer' : 'default' }}
          >
            <FaStarHalfAlt/>
          </span>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <span 
            key={i} 
            className="star empty"
            onClick={() => handleClick(fullStars + hasHalfStar + i + 1)}
            style={{ cursor: interactive ? 'pointer' : 'default' }}
          >
            <FaRegStar/>
          </span>
        ))}
      </div>
      {reviews && (
        <span className="reviews-count">({reviews})</span>
      )}
    </div>
  );
};

export default Rating;

