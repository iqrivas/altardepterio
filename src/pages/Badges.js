import React from "react";
import { Link } from "react-router-dom";
import BadgesList from "../components/BadgesList";
import hero from "../images/jeremy-perkins-uhjiu8FjnsQ-unsplash.jpg";
import "./styles/Badges.css";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    console.log("1. Constructor()");

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.log("3. ComponentDidMount()");
    this.fetchPetitions();
    
  }

  fetchPetitions = async () => {
    const response = await fetch('https://altardepterio-api.herokuapp.com/api/petitions');
    const json = await response.json();
    this.setState({
      data: json.data
    })
  }

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  render() {
    console.log("2. render ()");
    return (
      <React.Fragment>
        <div className="Badges">

          <div className="Badges__container">
            <div className="Badges__buttons">
              <Link to="/badges/new" className="btn btn-primary">
                Nueva Solicitud
              </Link>
            </div>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
