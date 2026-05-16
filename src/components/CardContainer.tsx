import React from 'react';
import Card from './Card';

function CardContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-8 lg:p-12 justify-center items-center"> 
      <Card title="Card 1" description="This is the first card" />
      <Card title="Card 2" description="This is the second card" />
      <Card title="Card 3" description="This is the third card" />
    </div>
  );
}

export default CardContainer;