import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import Kids from './pages/Kids';
import Others from './pages/Others';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/others" element={<Others />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
