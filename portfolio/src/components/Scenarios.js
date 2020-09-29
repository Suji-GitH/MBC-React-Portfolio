import React, { Component } from "react";
import Modal from "./Modal";
import Scenario from "./Scenario";
// import one from "../assets/img/JapCharacter/ichi.gif";
// import PFP from "../assets/img/Screenshots/PFP.jpg";
import Portfolios from "./portfolios";

const groupStyle = {
      display: "flex",
      marginTop: "200px",
      justifyContent: "center"
};

class Scenarios extends Component {
  state = { description: "", openModal: false, title: "", projectImg:"", hrefRepoLink:"", hrefAppLink:"" };
 
  handleOpenModal = ({ description, title, projectImg, hrefRepoLink, hrefAppLink }) => {
    this.setState({ description, openModal: true, title, projectImg, hrefRepoLink, hrefAppLink });
  };

  handleCloseModal = () => {
    this.setState({ openModal: false });
  };

  render = () => (
    <section className="App-scenarios">
      <div className="scenario-group" style={groupStyle}>
        {Portfolios.map(props => (
          <Scenario
            key={props.title}
            {...props}
            handleOpenModal={this.handleOpenModal}
          />
        ))}
      </div>
      <Modal {...this.state} onCloseModal={this.handleCloseModal} />
    </section>
  );
}

export default Scenarios;