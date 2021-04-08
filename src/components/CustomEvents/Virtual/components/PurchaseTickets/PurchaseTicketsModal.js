import React, { useState, useEffect } from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
//import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import modalStyle from "assets/jss/material-kit-react/virtualLoginModal.js";
// @material-ui/icons
import Typography from "@material-ui/core/Typography";

import PurchaseTicketsForm from "components/CustomEvents/Virtual/components/PurchaseTickets/PurchaseTicketsForm.js";
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles(modalStyle);

export default function LoginModal(props) {
  const classes = useStyles();

  const [showTicketsForm, setShowTicketsForm] = useState(null);

  const clickedYes = () => {
    console.log("clicked yes.");
    setShowTicketsForm(true);
  };

  const clickedNo = () => {
    console.log("clicked no.");
    setShowTicketsForm(false);
    props.closeTicketsModal();
  };

  const renderLoginContent = () => {
    //console.log("Was login clicked? ", props.loginClicked);
    return <PurchaseTicketsForm closeModal={props.closeTicketsModal} />;
  };

  const renderWelcome = () => {
    return (
      <div style={{ margin: "10px 0" }}>
        <Typography variant="h5" component="h2">
          Welcome to the American Indian Day Event Page!
        </Typography>
      </div>
    );
  };

  return (
    <Dialog
      classes={{
        root: classes.center,
        paper: classes.modal,
      }}
      open={props.showTicketsModal}
      keepMounted
      onClose={props.closeTicketsModal}
      aria-labelledby="modal-slide-title"
      aria-describedby="modal-slide-description"
    >
      <DialogTitle
        id="classic-modal-slide-title"
        disableTypography
        className={classes.modalHeader}
        style={{ width: "100%" }}
      >
        <IconButton
          className={classes.modalCloseButton}
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={props.closeTicketsModal}
        >
          <Close className={classes.modalClose} />
        </IconButton>
        {renderWelcome()}
      </DialogTitle>
      <DialogContent
        style={{
          paddingTop: "0px",
        }}
        id="modal-slide-description"
        className={classes.modalBody}
      >
        {renderLoginContent()}
      </DialogContent>
    </Dialog>
  );
}
