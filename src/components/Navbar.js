import React from 'react';
import logo from '../images/pterio.png';
import './styles/Navbar.css';

class Navbar extends React.Component {
    render () {
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <a className="Navbar__brand" href="/">
                        <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
                        <span>El Altar de Pterio</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Navbar;