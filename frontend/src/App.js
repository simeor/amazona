import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import ProductScreen from './components/ProductScreen';
import CartScreen from './components/CartScreen';
import {BrowserRouter, Route, Link} from 'react-router-dom';

function App() {

  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add('open');
  }

  const closeMenu = () =>{
   document.querySelector(".sidebar").classList.remove('open');
  }


  return (
    <BrowserRouter>

    <div classNameName="App">

  <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu} >&#9776;</button>
        <Link to="/">Amazona</Link>
      </div>
      <div className="header-links">
        <a href="">Cart</a>
        <a href="">Signin</a>
      </div>
    </header>

    <aside className='sidebar'>
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>X</button>
      <ul>
        <li>Retro</li>
        <li>90s</li>
        <li>Icons</li>
        <li>Cult Movie</li>
      </ul>
    </aside>


    <main className="main">
      <div className="content">
        <Route exact path="/product/:id" component={ProductScreen} />
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/cart/:id?" component={CartScreen} />
      </div>
    </main>


    <footer className="footer">
      All rights reserved.
    </footer>
  </div>
  </div>
  </BrowserRouter>

  );
}

export default App;
