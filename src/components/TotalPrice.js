import React from 'react';

const TotalPrice = ({ totalPrice }) => {
  return (
    <div className="alert alert-info text-center"
      style={{
        position: 'fixed',
        top: '60px', 
        right: '10px',
        zIndex: 1000,
        backgroundColor: 'white',
        padding: '10px 15px',
        borderRadius: '5px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <h4>Total Price: R{totalPrice.toFixed(2)}</h4>
    </div>
  );
};

export default TotalPrice;


