import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';

// Importing the page components
import Featured from './pages/featured';
import Men from './pages/men';
import Women from './pages/women';
import Kids from './pages/kids';
import shoeImage from './assets/nike.jpg'; // Ensure path is correct

// Home Component with Image Box
const Home = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <h2>Shoe Collection</h2>
    <p>Here is a collection of Shoes</p>
    
    {/* Image Box */}
    <div style={styles.box}>
      <img
        src={shoeImage}
        alt="Shoe"
        style={styles.image}
        onClick={() => alert('Redirecting to the Shoe Collection')}
      />
      <div style={styles.textBox}>
        <h3>Stylish</h3>
        <p>Explore our range of Stylish Shoes</p>
        <Link to="/featured">
          <button style={styles.button}>Shop Now</button>
        </Link>
      </div>
    </div>
  </div>
);

function Layout() {
  const location = useLocation();
  return (
      <div style={styles.container}>
        {/* Top Navigation Bar */}
        <nav style={styles.navbar}>
          <h1 style={styles.title}>Shoe City</h1>
          <div style={styles.menu}>
            <Link to="/help" style={styles.link}>Help</Link>
            <Link to="/signin" style={styles.link}>Sign In</Link>
          </div>
        </nav>

        {/* Centered Menu Below the Help Menu Bar */}
        {location.pathname === '/' && (
        <div style={styles.centeredMenu}>
          <Link to="/featured" style={styles.link}>Featured</Link>
          <Link to="/men" style={styles.link}>Men</Link>
          <Link to="/women" style={styles.link}>Women</Link>
          <Link to="/kids" style={styles.link}>Kids</Link>
        </div>
        )}

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/featured" element={<Featured />} /> {/* Featured Page route */}
          <Route path="/men" element={<Men />} />           {/* Other routes */}
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
        </Routes>
      </div>
  );
}
function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

// CSS-in-JS styling
const styles = {
  container: {
    maxWidth: '1200px', // Set a max width for the container
    margin: '0 auto', // Center the container
    padding: '0 2cm',
  },
  navbar: {
    backgroundColor: 'white', // Navbar background color
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    color: 'black', // Text color for links
    textDecoration: 'none',
    padding: '10px',
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
  },
  centeredMenu: {
    display: 'flex',
    justifyContent: 'center', // Center the menu items
    padding: '10px',
  },
  box: {
    padding: '20px', // Add padding inside the box
    textAlign: 'center', // Center text inside this box
    backgroundColor: 'white', // Background color for visibility
    borderRadius: '8px',
    margin: '20px 0', // Vertical spacing
  },
  textBox: {
    marginTop: '10px', // Space between image and text
    textAlign: 'center', // Center text inside this box
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  button: {
    backgroundColor: '#444',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default App;
