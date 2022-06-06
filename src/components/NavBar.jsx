import React from 'react';
import './styles.css';
import logoReact from './logo192.png';

const NavBar = () => {

  return (
    <div>
        <header>
            <div className='logo'>
                <img src={logoReact} alt="logo" />
            </div>
            <div className='NavBar'>
                <a href="">Home</a>
                <a href="">Servicio</a>
                <a href="">Productos</a>
                <a href="">Contacto</a>
            </div>


        </header>
    </div>
  )
}

export default NavBar