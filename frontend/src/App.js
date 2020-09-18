import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data';
import Tshirt from './components/Tshirt';

function App() {

  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add('open');
  }

  const closeMenu = () =>{
   document.querySelector(".sidebar").classList.remove('open');
  }

  return (
    <div classNameName="App">

  <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu} >&#9776;</button>
        <a href="">Amazona</a>
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
        <ul className="products">
          {
          data.products.map(product =>
            <li>
              <Tshirt product={product}/>
            </li>)
          }
        </ul>
      </div>
    </main>


    <footer className="footer">
      All rights reserved.
    </footer>
  </div>
  </div>
  );
}

export default App;
