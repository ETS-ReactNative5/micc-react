import React from "react";
import { Link } from "react-router-dom";

// @material-ui/core components
import { Icon } from "@material-ui/core";
import { cardTitle } from "assets/jss/material-kit-react.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
//import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";
import Button from "components/CustomButtons/Button.js";

// Styles
import styles from "assets/jss/material-kit-react/components/customCardStyle/customMiccosukeeCardStyle.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

const MiccosukeeCard = (props) => {
  const classes = useStyles();

  const renderButtonOne = () => {
    const buttonOneStyle =
      props.buttonTwo !== "" ? { width: "49%" } : { width: "100%" };
    //if button one is a function, it contains a routing Link component
    if (props.buttonOne.usesRouter) {
      return (
        <Link to={props.buttonOne.link}>
          <Button customClassName={props.theme} style={buttonOneStyle}>
            {props.buttonOne.text}
          </Button>
        </Link>
      );
    } else {
      return (
        <Button customClassName={props.theme} style={buttonOneStyle}>
          {props.buttonOne.text}
        </Button>
      );
    }
  };

  const renderButtonTwo = () => {
    //if button one is a function, it contains a routing Link component
    if (props.buttonTwo.usesRouter) {
      return (
        <Link to={props.buttonTwo.link}>
          <Button
            customClassName={props.theme}
            className={classes.button}
            style={{ width: "49%" }}
          >
            {props.buttonTwo.text}
          </Button>
        </Link>
      );
    } else {
      return (
        <Button customClassName={props.theme} style={{ width: "49%" }}>
          {props.buttonTwo.text}
        </Button>
      );
    }
  };

  const renderFooter = () => {
    if (!props.hours && !props.phone && !props.address) {
      return null;
    } else {
      return (
        <CardFooter>
          <GridContainer direction="column">
            <GridItem style={{ marginBottom: "8px" }}>
              <Icon
                style={{
                  color: "#5a5a5a",
                  verticalAlign: "middle",
                }}
              >
                schedule
              </Icon>
              &nbsp;
              {props.hours}
            </GridItem>
            <GridItem style={{ marginBottom: "8px" }}>
              <Icon
                style={{
                  color: "#5a5a5a",
                  verticalAlign: "middle",
                }}
              >
                phone
              </Icon>
              &nbsp; {props.phone}
            </GridItem>
            <GridItem>
              <Icon style={{ color: "#5a5a5a", verticalAlign: "middle" }}>
                map
              </Icon>
              &nbsp; {props.address}
            </GridItem>
          </GridContainer>
        </CardFooter>
      );
    }
  };

  return (
    <Card style={{ margin: "0" }}>
      <img
        style={{
          width: "100%",
          display: "block",
          borderTopLeftRadius: "6px",
          borderTopRightRadius: "6px",
        }}
        src={props.imgSrc}
        alt="Card-img-cap"
      />
      <CardBody>
        <h4 className={cardTitle}>{props.title}</h4>
        <p>{props.description}</p>
        <div
          style={
            props.buttonTwo !== ""
              ? { textAlign: "center" }
              : { textAlign: "left" }
          }
        >
          {renderButtonOne()}
          {props.buttonTwo !== "" ? renderButtonTwo() : null}
        </div>
      </CardBody>
      {renderFooter()}
    </Card>
  );
};

export default MiccosukeeCard;
