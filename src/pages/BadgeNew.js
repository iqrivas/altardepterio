import React from "react";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import "./styles/BadgeNew.css";

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

  createPetition = async () => {
    const response = await fetch('https://altardepterio-api.herokuapp.com/api/petitions', {
      method: "POST",
      body: JSON.stringify(this.state.form),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    const json = await response.json();
    console.log(json)
    alert(json.message)
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Formulario enviado');
    console.log(this.state.form);
    this.createPetition();    
  }

  render() {
    return (
      <React.Fragment>

        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 px-5 mb-4">
              <Badge
                requestType={this.state.form.requestType}
                requestTitle={this.state.form.requestTitle}
                requestDescription={this.state.form.requestDescription}
                requestAuthor={this.state.form.requestAuthor}
                avatarImg=""
                requestTag={this.state.form.requestTag}
              />
            </div>
            <div className="col-md-6 col-sm-12 px-5">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
