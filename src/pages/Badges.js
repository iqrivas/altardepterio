import React from 'react';
import Navbar from '../components/Navbar';
import hero from '../images/jeremy-perkins-uhjiu8FjnsQ-unsplash.jpg';
import './styles/Badges.css';

class Badges extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="Badges">
                    <div className="Badges__hero">
                        <img className="img-fluid" src={hero} alt="Hero"/>
                    </div>

                </div>
            </div>
        )
    }
}

export default Badges;