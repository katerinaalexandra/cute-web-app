import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={'/'} element={<Homepage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
