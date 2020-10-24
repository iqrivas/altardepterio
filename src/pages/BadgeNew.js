import React from 'react';
import Badge from '../components/Badge';
import Navbar from '../components/Navbar';
import './styles/BadgeNew.css';
import logo from '../images/tyler-van-der-hoeven-_ok8uVzL2gI-unsplash.jpg';

class BadgeNew extends React.Component {
    render () {
        return(
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={logo} alt="Hero"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                        <Badge 
                            requestType="Cadena de Oración" 
                            requestTitle="Salvemos al Pastelito" 
                            requestAuthor="por Anónimo"
                            avatarImg= ""
                            requestTag="#OompaLoompa"
                        />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;