import React from "react";
import "./styles/BadgeList.css";
import Badge from "./Badge";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled px-4">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge._id}>
              <Badge 
                requestType={badge.requestType} 
                requestTitle={badge.requestTitle} 
                requestDescription={badge.requestDescription} 
                requestAuthor={badge.requestAuthor} 
                requestTag={badge.requestTag} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
