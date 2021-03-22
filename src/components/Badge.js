import React from "react";
import "./styles/Badge.css";
import positive from "../images/undraw_positive_attitude_xaae.svg";
import question from "../images/undraw_Questions_re_1fy7.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="container ">
        <div className="row BadgeList">
          <div className="col-4 BadgeList__section-name">
            <img
              className="Badge__avatar"
              src={this.props.requestType == "Cadena de Oración" ? positive : question}
              alt="Avatar"
            />
            <p>{this.props.requestType}</p>
          </div>
          <div className="col-8 BadgeList__section-info">
            <p>{this.props.requestTitle}</p>
            <span>{this.props.requestDescription}</span>
            <br />
            <br />
            <span>por {this.props.requestAuthor}</span>
            <br />
            <span>{this.props.requestTag}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Badge;
