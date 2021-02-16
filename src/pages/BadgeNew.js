import React from "react";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import Navbar from "../components/Navbar";
import "./styles/BadgeNew.css";
import hero from "../images/jeremy-perkins-uhjiu8FjnsQ-unsplash.jpg";

class BadgeNew extends React.Component {
  state = {
    form: {
      requestType: "",
      requestTitle: "",
      requestDescription: "",
      requestAuthor: "",
      requestTag: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={hero} alt="Hero" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                requestType={this.state.form.requestType}
                requestTitle={this.state.form.requestTitle}
                requestDescription={this.state.form.requestDescription}
                requestAuthor={this.state.form.requestAuthor}
                avatarImg=""
                requestTag={this.state.form.requestTag}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
