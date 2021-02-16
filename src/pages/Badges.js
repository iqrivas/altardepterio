import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
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

    this.timeoutId = setTimeout(() => {
      this.setState({
        data: [
          {
            id: "1",
            requestType: "Cadena de Oración",
            requestTitle: "Protección contra el Huracán",
            requestDescripción: "Oh Gran Pterio, protégenos por favor!",
            requestAuthor: "La Costeñita",
            requestTag: "#PterioProtegenos",
          },
          {
            id: "2",
            requestType: "Consejo de Pterio",
            requestTitle: "Vacaciones sin Permiso",
            requestDescripción:
              "No me autorizaron mis vacaciones, ¿me voy de todas formas?",
            requestAuthor: "La Regia",
            requestTag: "#RegiaRebelde",
          },
          {
            id: "3",
            requestType: "Cadena de Oración",
            requestTitle: "Salven al Pastelito",
            requestDescripción:
              "Rescata el barco! que no se hundan los pastelitos!",
            requestAuthor: "La Suministradora",
            requestTag: "#MandenLasLanchas",
          },
        ],
      });
    }, 3000);
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
          <div className="Badges__hero">
            <img className="img-fluid" src={hero} alt="Hero" />
          </div>

          <div className="Badges__container">
            <div className="Badges__buttons">
              <Link to="/badges/new" className="btn btn-primary">
                Nueva Solicitud
              </Link>
            </div>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
