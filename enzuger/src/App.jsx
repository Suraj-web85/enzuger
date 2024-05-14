import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import HomePage from './Pages/Home/Home'; 
import Blog from './Pages/Blog/Blog'; 

function App() {
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blog</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
