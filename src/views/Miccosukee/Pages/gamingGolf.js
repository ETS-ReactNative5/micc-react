import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
//import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/miccosukee/gaming_golf.js";
//images
import mrgImg from "assets/img/miccosukee/pages/mrg_golf/mrg-card.jpg";
import golfImg from "assets/img/miccosukee/pages/mrg_golf/golf-card.jpg";

const useStyles = makeStyles(styles);

const GamingGolf = (props) => {
  const classes = useStyles();

  const cards = [
    {
      title: "Resort & Gaming",
      description:
        "With supporting text below as a natural lead-in to additional content.",
      imgSrc: mrgImg,
      buttonOne: {
        text: "CONTACT",
        color: "primary",
        link: "https://google.com",
      },
      buttonTwo: {
        text: "WEBSITE",
        color: "primary",
        link: "https://google.com",
      },
      hours: "Today's Hours: 9:00 AM - 2:00 AM",
      phone: "1-877-242-6464",
      address: "500 SW 177th Ave, Miami, FL 33194",
    },
    {
      title: "Golf & Country Club",
      description:
        "With supporting text below as a natural lead-in to additional content.",
      imgSrc: golfImg,
      buttonOne: {
        text: "CONTACT",
        color: "success",
        link: "https://google.com",
      },
      buttonTwo: {
        text: "WEBSITE",
        color: "success",
        link: "https://google.com",
      },
      hours: "Today's Hours: 9:00 AM - 5:00 PM",
      phone: "305-382-3930",
      address: "6401 Kendale Lakes Dr, Miami, FL 33183",
    },
  ];

  const renderCards = () => {
    return cards.map((card) => {
      return (
        <GridItem
          key={card.title}
          sm={12}
          md={6}
          style={{ maxWidth: "450px", padding: "15px" }}
        >
          <Card style={{ margin: "0" }}>
            <img
              style={{
                width: "100%",
                display: "block",
              }}
              className={classes.imgCardTop}
              src={card.imgSrc}
              alt="Card-img-cap"
            />
            <CardBody>
              <h4 className={classes.cardTitle}>{card.title}</h4>
              <p>{card.description}</p>
              <div style={{ textAlign: "center" }}>
                <Button style={{ width: "49%" }} color={card.buttonOne.color}>
                  {card.buttonOne.text}
                </Button>
                <Button style={{ width: "49%" }} color={card.buttonTwo.color}>
                  {card.buttonTwo.text}
                </Button>
              </div>
            </CardBody>
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
                  {card.hours}
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
                  &nbsp; {card.phone}
                </GridItem>
                <GridItem>
                  <Icon style={{ color: "#5a5a5a", verticalAlign: "middle" }}>
                    map
                  </Icon>
                  &nbsp; {card.address}
                </GridItem>
              </GridContainer>
            </CardFooter>
          </Card>
        </GridItem>
      );
    });
  };

  return (
    <div className={classNames(classes.main)}>
      <div className={classes.container}>
        <GridContainer style={{ clear: "both" }} justify="center">
          {renderCards()}
        </GridContainer>
      </div>
    </div>
  );
};

export default GamingGolf;

/*
    <div>
    <Button
        className={classes.backButton}
        onClick={() => props.click("/")}
        simple
    >
        <Icon>arrow_back_ios</Icon>BACK
    </Button>
    </div>
*/
