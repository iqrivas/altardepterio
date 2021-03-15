import React from 'react';
import './styles/Badge.css';
import positive from '../images/undraw_positive_attitude_xaae.svg';
import question from '../images/undraw_Questions_re_1fy7.svg';
//import logo from '../images/pterio_home.png';

class Badge extends React.Component {

    render () {
        return (
        <div className="Badge">
            <div className="Badge__section-name">
                <img className="Badge__avatar" src={this.props.requestType =='Cadena de Oración' ? positive :question} alt="Avatar"/>
                <h1>{this.props.requestType}</h1>
            </div>
            <div className="Badge__section-info">
                <h3>{this.props.requestTitle}</h3>
                <p>{this.props.requestDescription}</p>
                <div>por {this.props.requestAuthor}</div>
            </div>
            <div className="Badge__footer"> {this.props.requestTag} </div>
        </div>
        )
    }
}

export default Badge;