import React from "react";
import Slider from "react-slick";

// @material-ui core
import { Hidden } from "@material-ui/core";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// images
import image1 from "assets/media/img/airboats/Slider_Airboat_1.jpeg";
import image2 from "assets/media/img/airboats/Slider_Airboat2.jpeg";
import image3 from "assets/media/img/airboats/Slider_AirboatTurn.jpeg";
import image4 from "assets/media/img/airboats/Slider_Dock_1.jpeg";
import image5 from "assets/media/img/airboats/Slider_Hammock_1.jpeg";
import image6 from "assets/media/img/airboats/Slider_Kids_1.jpeg";

// styles
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";
import sliderStyles from "assets/jss/material-kit-react/components/customImageSlider.js";

// context
import { useLanguage } from "contexts/languageContext.js";

const useStyles = makeStyles(styles);
const useSliderStyles = makeStyles(sliderStyles);

const imageArray = [image1, image2, image3, image4, image5, image6];

const Details = () => {
  const language = useLanguage();
  const classes = useStyles();
  const sliderClasses = useSliderStyles();

  const renderDesktopSlider = () => {
    const settings = {
      arrows: true,
      //dots: true,
      //dotsClass: `slick-dots slick-thumb ${sliderClasses.customDots}`,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };

    const renderSliderImage = () => {
      return imageArray.map((image) => {
        return (
          <div key={image}>
            <img className={sliderClasses.featuredImage} src={image} />
          </div>
        );
      });
    };

    return (
      <div style={{ margin: "30px 5px 0 5px" }}>
        <Slider {...settings}>{renderSliderImage()}</Slider>
      </div>
    );
  };

  const renderMobileSlider = () => {
    const settings = {
      arrows: true,
      //dots: true,
      //dotsClass: `slick-dots slick-thumb ${sliderClasses.customDots}`,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const renderSliderImage = () => {
      return imageArray.map((image) => {
        return (
          <div key={image}>
            <img className={sliderClasses.featuredImage} src={image} />
          </div>
        );
      });
    };

    return (
      <div style={{ margin: "30px 5px 0 5px" }}>
        <Slider {...settings}>{renderSliderImage()}</Slider>
      </div>
    );
  };

  return (
    <GridContainer style={{ marginTop: "0px" }} justify="center">
      <GridItem xs={12}>
        <h1 style={{ fontStyle: "italic", fontWeight: "400" }}>
          {language ? "ADVENTURE AWAITS!" : "¡LA AVENTURA LE ESPERA!"}
        </h1>
        <p>
          {language
            ? `Miccosukee Airboats are the best way to glide the ‘Glades and
          experience the magnificent “River of Grass.” Feel the breeze and
          listen to the sawgrass whizz by. Get a glimpse into traditional
          Miccosukee life and discover a typical hammock-style camp that has
          been owned by the same family for more than 100 years! Let our expert
          guides show you a side of the beautiful Everglades you can’t see
          anywhere else.`
            : `Los Airboats (hidrodeslizadores) de los Miccosukee son la mejor manera de conocer y pasear por los Everglades y disfrutar del “Río de Césped”. Sienta la brisa y el ruido de la vegetación acuática mientras navega. Tendrá una idea clara de cómo era la vida tradicional de los Miccosukee y descubrirá la isla usada como campamento que ha pertenecido a la misma familia por más de 100 años. Permita que nuestros expertos le guíen y muestren lo más bello de los Everglades que no podrá ver en otro lugar.`}
        </p>
        <div style={{ marginBottom: "50px" }} className={classes.imageArea}>
          <Hidden mdUp>{renderMobileSlider()}</Hidden>
          <Hidden smDown>{renderDesktopSlider()}</Hidden>
        </div>
      </GridItem>
    </GridContainer>
  );
};

export default Details;
