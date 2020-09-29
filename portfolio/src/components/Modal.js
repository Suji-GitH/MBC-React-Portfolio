import React from "react";
import PropTypes from "prop-types";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

    const useModalStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const modalContentStyle = {
        fontFamily: "'Sawarabi Mincho', sans-serif",
        paddingLeft: "20px"
    };

    const buttonStyle = {
        background: "black",
        color: "white",
        marginRight: "10px"
    };

    const modalStyle = {
        display: "flex",
        width: "80%",
        backgroundColor: "white",
        borderRadius: "0px 16px 0px 16px",
        cursor: "crosshair"
    };

const Modals = ({ description, onCloseModal, openModal, title, projectImg, hrefRepoLink, hrefAppLink }) => (
    
    <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    style={useModalStyle}
    open={openModal}
    onClose={onCloseModal}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
  <Fade in={openModal}>
      <div style={modalStyle}>
    
        <img 
          src={projectImg} 
          alt={title}
          style={{ borderRadius: '0px 0px 0px 16px' }}
          height="400px" 
        />
        <div style={modalContentStyle}>
          <h2 id="transition-modal-title">{title}</h2>
          <p id="transition-modal-description">{description}</p>
          <a 
            href={hrefRepoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}> 
            <Button style={buttonStyle} variant="outlined" color="default">
              Repository Link
            </Button>
          </a>
          <a 
            href={hrefAppLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none' }}> 
            
            <Button variant="outlined" color="default">
              Application Link
            </Button>
          </a>
        </div>
      </div>
    </Fade>

  </Modal>
);

Modal.propTypes = {
    description: PropTypes.string.isRequired,
    onCloseModal: PropTypes.func.isRequired,
    openModal: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    projectImg: PropTypes.string.isRequired,
    hrefRepoLink: PropTypes.string.isRequired,
    hrefAppLink: PropTypes.string.isRequired
};

export default Modals;