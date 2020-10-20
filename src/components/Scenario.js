import React, { PureComponent } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";
import PropTypes from "prop-types";

class Scenario extends PureComponent {
  openModal = () => {
    const {
      description,
      technology,
      handleOpenModal,
      title,
      projectImg,
      hrefRepoLink,
      hrefAppLink,
    } = this.props;
    handleOpenModal({
      description,
      technology,
      title,
      projectImg,
      hrefRepoLink,
      hrefAppLink,
    });
  };

  render = () => (
    <div className="scenario" onClick={this.openModal}>
      <Tooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        title={this.props.title}
      >
        <img
          src={this.props.imgSrc}
          alt="projectNum"
          height="100px"
          style={{ marginRight: "50px", borderRadius: "90%" }}
        />
      </Tooltip>
    </div>
  );
}

Scenario.propTypes = {
  description: PropTypes.string.isRequired,
  technology: PropTypes.string.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  projectImg: PropTypes.string.isRequired,
  hrefRepoLink: PropTypes.string.isRequired,
  hrefAppLink: PropTypes.string.isRequired,
};

export default Scenario;
