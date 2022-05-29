import React from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import About from './Components/About';
import BookLists from './Components/BookLists';
import Contact from './Components/Contact';
import BookDetal from './Components/BookDetal';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={< HomePage />} />
          <Route path='/book/:id' element={<BookDetal/>} />
          <Route path='/about/' element={<About />} />
          <Route path='/contact/' element={<Contact />} />
          <Route path='/BookShop' element={<BookLists />} />
          
        </Routes>
      </Router>
      
     
    </div>
  );
}

export default App;
