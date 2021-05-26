import React from "react";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomImageSlider from "components/CustomImageSlider/CustomImageSlider.js";

// Images
import bgImage from "assets/img/bg3.jpg";
import image1 from "assets/img/village/1024x642_Slider_L-e1551456221969.jpg";
import image2 from "assets/img/village/1024x642_Slider_D-e1551456149892.jpg";
import image3 from "assets/img/village/1024x642_Slider_M-e1551456229527.jpg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

// Services
import { renderPoiHours } from "services/renderPoiHours.js";

// Business info
import { villageHours } from "business_info/hours.js";

const useStyles = makeStyles(styles);

const imageArray = [image1, image2, image3];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const GiftShop = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Village Museum</h2>
              {renderPoiHours(villageHours)}
              <p>
                Opened in 1983, our Museum offers visitors a glimpse into the
                Tribe’s unique way of life. Miccosukee history and culture is
                preserved through historical documents, archival photographs and
                original artifacts.
              </p>
              <p>
                Alongside permanent exhibits showcasing the early life of the
                Tribe as they adapted to the Everglades, the museum hosts
                rotating exhibits highlighting historical and contemporary
                Native American, First Nations and Aboriginal life.
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

export default GiftShop;