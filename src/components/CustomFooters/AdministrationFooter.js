import React, { useContext, useEffect } from "react";

// Custom Component
import Footer from "components/Footer/Footer.js";

// Theme
import { administrationColor } from "themes/colors.js";

// Business Info
import { airboatsSocialMedia } from "business_info/socialMedia.js";

// Context
import { ContactModalContext } from "contexts/ContactFormModalContext.js";
import { useLanguage } from "contexts/languageContext.js";

const AdministrationFooter = () => {
  const language = useLanguage();
  const [showContactModal, setShowContactModal] = useContext(
    ContactModalContext
  );

  // close contact modal on mount
  useEffect(() => {
    closeModal(setShowContactModal);
  }, []);

  /*
  const openModal = (setState) => {
    setState(true);
  };
  */

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
          externalLink: true,
          linkText: language ? "Careers" : "Empleos",
          linkTo:
            "https://www.indeed.com/cmp/Miccosukee-Tribe-of-Indians-of-Florida/jobs",
        },
      ],
    },
    {
      header: language ? "GAMING & GOLF" : "CASINO Y GOLF",
      subMenu: [
        {
          linkText: "Resort & Gaming",
          linkTo: "/mrg",
        },
        {
          linkText: "Golf & Country Club",
          linkTo: "/golf",
        },
      ],
    },
    {
      header: language ? "EXPERIENCES" : "EXPERIENCIAS",
      subMenu: [
        {
          linkText: language ? "Indian Village" : "Aldea Indígena",
          linkTo: "/village",
        },
        {
          linkText: "Airboats",
          linkTo: "/airboats",
        },
      ],
    },
    {
      header: language ? "FOLLOW US" : "CONÉCTESE CON NOSOTROS",
      subMenu: [
        {
          externalLink: true,
          linkText: "Twitter",
          linkTo: airboatsSocialMedia.twitter,
        },
      ],
    },
  ];

  return (
    <React.Fragment>
      <Footer footerMenuItems={footerArray} color={administrationColor} />
    </React.Fragment>
  );
};

export default AdministrationFooter;
