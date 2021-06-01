import React, { useContext, useEffect } from "react";

// Custom Component
import Footer from "components/Footer/Footer.js";

// Theme
import { mrgColor } from "themes/colors.js";

// Business Info
import { mrgBusinessInfo } from "business_info/genericInfo.js";
import { mrgSocialMedia } from "business_info/socialMedia.js";

// Context
import { ContactModalContext } from "contexts/ContactFormModalContext.js";

const MrgFooter = () => {
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
          linkTo: "/mrg/covid-19",
        },
        {
          externalLink: true,
          linkText: "Careers",
          linkTo:
            "https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=346f5352-8215-418a-95b5-a67f6bba88ac&ccId=19000101_000001&type=MP&lang=en_US",
        },
      ],
    },
    {
      header: "ADDITIONAL LINKS",
      subMenu: [
        {
          linkText: "Contact",
          linkTo: "#contact",
          clickFunction: () => openModal(setShowContactModal),
        },
        {
          externalLink: true,
          linkText: "Directions",
          linkTo: "https://goo.gl/maps/yZ9QCXJ869UqZRxJ9",
        },
        {
          linkText: "Banquets & Catering",
          linkTo: "/mrg/banquets-catering",
        },
      ],
    },
    {
      header: "FOLLOW US",
      subMenu: [
        {
          externalLink: true,
          linkText: "Facebook",
          linkTo: mrgSocialMedia.facebook,
        },
        {
          externalLink: true,
          linkText: "Instagram",
          linkTo: mrgSocialMedia.instagram,
        },
        {
          externalLink: true,
          linkText: "Twitter",
          linkTo: mrgSocialMedia.twitter,
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
        color={mrgColor}
        signup={mrgBusinessInfo.name}
      />
    </React.Fragment>
  );
};

export default MrgFooter;
