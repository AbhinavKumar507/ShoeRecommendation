// src/pages/featured.js
import React from 'react';

const Featured = () => {
  return (
    <div style={styles.container}>
      <h2>Featured Shoes</h2>
      <p>Explore our collection of featured shoes!</p>
      {/* You can add images or content related to featured shoes here */}
    </div>
  );
};

// CSS-in-JS styling for Featured
const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
};

export default Featured;
