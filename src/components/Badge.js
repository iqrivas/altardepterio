import React from 'react';
import './styles/Badge.css';
import avatar from '../images/undraw_Container_ship_ok1c.png';
import logo from '../images/pterio_home.png';

class Badge extends React.Component {
    render () {
        return (
        <div className="Badge">
            <div className="Badge__section-name">
                <img className="Badge__avatar" src={avatar} alt="Avatar"/>
                <h1>{this.props.requestType}</h1>
            </div>
            <div className="Badge__section-info">
                <h3>{this.props.requestTitle}</h3>
                <div>{this.props.requestAuthor}</div>
            </div>
            <div className="Badge__footer"> {this.props.requestTag} </div>
        </div>
        )
    }
}

export default Badge;