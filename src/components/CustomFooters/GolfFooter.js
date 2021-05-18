import React, { useState, useContext, useEffect } from "react";
import Footer from "components/Footer/Footer.js";
import { golfColor } from "themes/colors.js";
import { golfBusinessInfo } from "assets/business_info/genericInfo.js";
import CustomContactModal from "components/CustomModal/CustomContactModals/CustomContactModal.js";

// Context
import { ContactModalContext } from "contexts/ContactFormModalContext.js";

const GolfFooter = () => {
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
          linkText: "Main Home",
          linkTo: "/",
        },
        {
          linkText: "Covid-19",
          linkTo: "/golf/covid-19",
        },
        {
          linkText: "Careers",
          linkTo: "#",
        },
      ],
    },
    {
      header: "ADDITIONAL LINKS",
      subMenu: [
        {
          linkText: "Contact",
          linkTo: "#",
          clickFunction: () => openModal(setShowContactModal),
        },
        {
          externalLink: true,
          linkText: "Directions",
          linkTo: "https://goo.gl/maps/SxyAMrs1jSX7MrVK8",
        },
      ],
    },
    {
      header: "FOLLOW US",
      subMenu: [
        {
          externalLink: true,
          linkText: "Facebook",
          linkTo: "#",
        },
        {
          externalLink: true,
          linkText: "Instagram",
          linkTo: "#",
        },
        {
          externalLink: true,
          linkText: "Twitter",
          linkTo: "#",
        },
      ],
    },
    {
      action: true,
      headerDesktop: "SIGN UP FOR OUR PROMOTIONS",
      headerMobile: "SUBSCRIBE",
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
