import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";
import styles from "assets/jss/material-kit-react/views/miccosukee/home.js";

const useStyles = makeStyles(styles);

//<Link to="/about">About</Link>

const Home = (props) => {
  const classes = useStyles();

  const cards = [
    {
      title: "Miccosukee Resort & Gaming",
      description:
        "With supporting text below as a natural lead-in to additional content.",
      cardBackground: {
        background: `linear-gradient(
                rgba(156, 39, 176, 0.45), 
                rgba(156, 39, 176, 0.45)),
                url("https://miccosukee.com/wp-content/uploads/2019/12/gaming-scaled.jpg")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
      header: "",
      headerColor: "",
      footer: "",
      buttonColor: "primary",
    },
    {
      title: "Everglades Experiences",
      description:
        "With supporting text below as a natural lead-in to additional content.",
      cardBackground: {
        background: `linear-gradient(
                rgba(67, 169, 70, 0.45), 
                rgba(67, 169, 70, 0.45)),
                url("https://miccosukee.com/wp-content/uploads/2019/12/airboatrides-scaled.jpg")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
      bgImage: "test2",
      bgColor: "#43a946",
      header: "",
      headerColor: "",
      footer: "",
      buttonColor: "success",
    },
    {
      title: "History",
      description:
        "With supporting text below as a natural lead-in to additional content.",
      cardBackground: {
        background: `linear-gradient(
                rgba(224, 206, 0, 0.45), 
                rgba(224, 206, 0, 0.45)),
                url("https://miccosukee.com/wp-content/uploads/2018/06/01292012195.jpg")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
      bgImage: "test3",
      bgColor: "#008fa0",
      header: "",
      headerColor: "",
      footer: "",
      buttonColor: "info",
    },
    {
      title: "Administration",
      description:
        "With supporting text below as a natural lead-in to additional content.",
      cardBackground: {
        background: `linear-gradient(
                rgba(197, 78, 69, 0.45), 
                rgba(197, 78, 69, 0.45)),
                url("https://miccosukee.com/wp-content/uploads/2019/11/Performers_PowWow-1.jpg")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
      header: "",
      headerColor: "",
      footer: "",
      buttonColor: "danger",
    },
  ];

  const renderMiccCards = () => {
    return cards.map((card) => {
      return (
        <GridItem
          key={card.title}
          style={{
            padding: "15px",
            height: "50%",
            minHeight: "350px",
            width: "100%",
          }}
          sm={12}
          md={6}
        >
          <Card
            onClick={() => props.click(card.title) || null}
            className={classes.mCard}
            style={card.cardBackground || {}}
          >
            {card.header !== "" ? (
              <CardHeader color={card.headerColor}>{card.header}</CardHeader>
            ) : null}
            <div className={classes.mCardHeader}>
              <h4 style={{ color: "white" }} className={classes.cardTitle}>
                {card.title}
              </h4>
              <p className={classes.mCardDescription}>{card.description}</p>
            </div>
            <CardBody></CardBody>
            {card.footer !== "" ? <CardFooter>{card.footer}</CardFooter> : null}
          </Card>
        </GridItem>
      );
    });
  };

  return (
    <div className={classNames(classes.main)}>
      <div className={classes.container}>
        <GridContainer
          style={{ height: "100vh" }}
          justify="center"
          alignItems="center"
        >
          {renderMiccCards()}
        </GridContainer>
      </div>
    </div>
  );
};

export default Home;
