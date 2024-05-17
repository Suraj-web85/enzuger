// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './Pages/Home/Home'; 
import Blog from './Pages/Blog/Blog'; 
import CategoryPage from './Pages/Blog/CategoryPage';
import SingleBlog from './Pages/Blog/SingleBlog';

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
        <Route path="/blog/category/:category" element={<CategoryPage />} /> 
        <Route path="/blog/:catetitle" element={<SingleBlog />} />
      
      </Routes>
    </Router>
  );
}

export default App;
