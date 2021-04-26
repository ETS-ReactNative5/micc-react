import React from "react";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Typography from "@material-ui/core/Typography";
import Button from "components/CustomButtons/Button.js";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomImageSlider from "components/CustomImageSlider/CustomImageSlider.js";

// Images
import bgImage from "assets/img/bg3.jpg";
import image1 from "assets/img/mrg/dining/martini-bar/MartiniBar_01.jpeg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

const useStyles = makeStyles(styles);

const imageArray = [image1];

const sliderContent = [
  {
    id: 1,
    height: "30vh",
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const MartiniBar = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Martini Bar</h2>
              <h6>
                Monday – Thursday, 4:00 P.M. - 12:00 A.M.
                <br />
                Friday - Saturday, 11:00 A.M. to 2:00 A.M.
                <br />
                Sunday: 9:00 A.M. - 12:00 A.M.
              </h6>
              <p>
                Classic cocktails in a tropical setting. Chic and comfortable,
                the Martini Bar is the perfect place to unwind and enjoy a
                drink, small plates and live entertainment throughout the week.
              </p>
            </div>
          </GridItem>
          <GridItem md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider images={imageArray} />
            </div>
          </GridItem>
        </GridContainer>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default MartiniBar;