import React, { useContext, useEffect } from "react";

// Custom Component
import Footer from "components/Footer/Footer.js";

// Theme
import { golfColor } from "themes/colors.js";

// Business Info
import { golfBusinessInfo } from "business_info/genericInfo.js";
import { golfSocialMedia } from "business_info/socialMedia.js";

// Context
import { ContactModalContext } from "contexts/ContactFormModalContext.js";
import { useLanguage } from "contexts/languageContext.js";

const GolfFooter = () => {
  const language = useLanguage();
  const [showContactModal, setShowContactModal] = useContext(
    ContactModalContext
  );

  // close contact modal on mount
  useEffect(() => {
    closeModal(setShowContactModal);
  }, []);

  const openModal = (setState) => {
    setState(true);
  };

  const closeModal = (setState) => {
    setState(false);
  };

  const footerArray = [
    {
      header: "MICCOSUKEE",
      subMenu: [
        {
          linkText: language ? "Main Home" : "Página Principal",
          linkTo: "/",
        },
        {
          linkText: "Covid-19",
          linkTo: "/golf/covid-19",
        },
        {
          externalLink: true,
          linkText: language ? "Careers" : "Empleos",
          linkTo:
            "https://www.indeed.com/cmp/Miccosukee-Tribe-of-Indians-of-Florida/jobs",
        },
      ],
    },
    {
      header: language ? "ADDITIONAL LINKS" : "ENLACES ADICIONALES ",
      subMenu: [
        {
          linkText: language ? "Contact" : "Contacto",
          linkTo: "#",
          clickFunction: () => openModal(setShowContactModal),
        },
        {
          externalLink: true,
          linkText: language ? "Directions" : "Direcciones",
          linkTo: "https://goo.gl/maps/SxyAMrs1jSX7MrVK8",
        },
      ],
    },
    {
      header: language ? "FOLLOW US" : "CONÉCTESE CON NOSOTROS",
      subMenu: [
        {
          externalLink: true,
          linkText: "Facebook",
          linkTo: golfSocialMedia.facebook,
        },
        {
          externalLink: true,
          linkText: "Instagram",
          linkTo: golfSocialMedia.instagram,
        },
        {
          externalLink: true,
          linkText: "Twitter",
          linkTo: golfSocialMedia.twitter,
        },
      ],
    },
    {
      action: true,
      headerDesktop: language
        ? "SIGN UP FOR OUR PROMOTIONS"
        : "INSCRÍBASE A NUESTRAS PROMOCIONES",
      headerMobile: language ? "SUBSCRIBE" : "SUSCRÍBASE",
    },
  ];

  return (
    <React.Fragment>
      <Footer
        footerMenuItems={footerArray}
        color={golfColor}
        signup={golfBusinessInfo.name}
      />
    </React.Fragment>
  );
};

export default GolfFooter;
