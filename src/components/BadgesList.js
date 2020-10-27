import React from "react";
import "./styles/BadgeList.css";
import avatar from "../images/undraw_Container_ship_ok1c.png";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id}>
              <div className="container ">
                <div className="row BadgeList">
                  <div className="col-4 BadgeList__section-name">
                    <img className="Badge__avatar" src={avatar} alt="Avatar" />
                    <p>{badge.requestType}</p>
                  </div>
                  <div className="col-8 BadgeList__section-info">
                    <p>{badge.requestTitle}</p>
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
