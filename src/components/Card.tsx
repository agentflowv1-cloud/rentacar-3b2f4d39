import React from 'react';
import './Card.css';

interface CardProps {
  image: string;
  title: string;
  description: string;
}

function Card({ image, title, description }: CardProps) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;