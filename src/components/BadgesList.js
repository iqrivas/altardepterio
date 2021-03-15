import React from "react";
import "./styles/BadgeList.css";
import positive from '../images/undraw_positive_attitude_xaae.svg';
import question from '../images/undraw_Questions_re_1fy7.svg';

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge._id}>
              <div className="container ">
                <div className="row BadgeList">
                  <div className="col-4 BadgeList__section-name">
                    <img className="Badge__avatar" src={badge.requestType =='Cadena de Oración' ? positive :question} alt="Avatar" />
                    <p>{badge.requestType}</p>
                  </div>
                  <div className="col-8 BadgeList__section-info">
                    <p>{badge.requestTitle}</p>
                    <span>{badge.requestDescripción}</span><br/><br/>
                    <span>por {badge.requestAuthor}</span><br/>
                    <span>{badge.requestTag}</span>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
