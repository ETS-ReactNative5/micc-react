import React, { useContext, useEffect } from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// google analytics
import GA4React from "ga-4-react";

// context
import { LanguageProvider } from "contexts/languageContext.js";
import { PopupProvider } from "contexts/PopupContext.js";
import { AlertContext } from "contexts/AlertContext.js";
import { ContactFormProvider } from "contexts/ContactFormContext.js";
import { ContactModalProvider } from "contexts/ContactFormModalContext.js";
import { FoodMenuProvider } from "contexts/FoodMenuContext.js";
import { MobileMenuDrawerProvider } from "contexts/MobileMenuDrawerContext.js";

// Snackbar
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Check from "@material-ui/icons/Check";

// my pages
import Miccosukee from "views/Miccosukee";
import MRG from "views/MRG";
import Golf from "views/Golf";
import Village from "views/Village";
import Airboats from "views/Airboats";
import History from "views/History";
import Administration from "views/Administration";
import AID from "views/Miccosukee/Pages/virtual_event/21_americanIndianDay.js";

// my components
import PopupModal from "components/CustomModal/CustomPopup/CustomPopupModal.js";

var hist = createBrowserHistory();

const App = () => {
  const [alerts, setAlerts] = useContext(AlertContext);

  //https://www.npmjs.com/package/ga-4-react
  const trackingId = "G-7PV911VYR0"; // Replace with your Google Analytics tracking ID
  const history = createBrowserHistory();
  const ga4react = new GA4React(trackingId);
  ga4react.initialize().then(
    (ga4) => {
      history.listen((location) => {
        ga4.pageview(window.location.pathname);
        ga4.gtag("event", "pageview", window.location.pathname);
      });
    },
    (err) => {
      console.error(err);
    }
  );

  //let { path } = useRouteMatch();
  //let location = useLocation();
  /*
  useEffect(() => {
    const host = window.location.host;
    const protocol = window.location.protocol;
    const parts = host.split(".");
    const path = window.location.pathname;

    const getSubdomain = () => {
      if (parts[1] === "localhost:3000") {
        return parts[0];
      }
      if (parts.length > 2 && parts[0] !== "www") {
        return parts[0];
      }
    };

    if (parts[0] === "www") {
      return;
    } else {
      // If we get more than 2 parts, then we have a subdomain
      if (parts[1] === "localhost:3000") {
        // Remove the subdomain from the parts list
        const mainDomain = parts.slice(1);
        // Set the location to the new url
        window.location =
          protocol + "//" + mainDomain + "/" + getSubdomain() + path;
      } else {
        if (parts.length > 2) {
          // Remove the subdomain from the parts list
          const mainDomain = parts.slice(1);
          // Set the location to the new url
          window.location =
            protocol + "//" + mainDomain + "/" + getSubdomain() + path;
        }
      }
    }

    console.log("host: ", host);
    console.log("protocol: ", protocol);
    console.log("parts: ", parts);
    console.log("subdomain: ", getSubdomain());
    console.log("path: ", path);
  }, []);
  */

  // Snackbar unmounting is placed in the Footer.js and VirtualEvent.js components. Footer will handle all website unmounts with exception to the virtual events.
  const renderSnackbar = () => {
    // snackbar message determined by alert
    const getMessage = (id) => {
      if (id === "virtualEventLoginId") {
        return (
          <span>
            <b>Congratulations!</b> You have successfully logged in!
          </span>
        );
      }
      if (id === "signupAlertId") {
        return (
          <span>
            <b>Signup Successful!</b>
          </span>
        );
      }
      if (id === "contactAlertId") {
        return (
          <span>
            <b>Message Sent Successfully!</b>
          </span>
        );
      }
    };

    // iterate through all alerts and set id to the one that is true
    for (const alert in alerts) {
      if (alerts[alert] === true) {
        return (
          <div
            style={{
              position: "fixed",
              bottom: 0,
              zIndex: 5,
              width: "100%",
            }}
          >
            <SnackbarContent
              id={alert}
              message={getMessage(alert)}
              close
              color="success"
              icon={Check}
            />
          </div>
        );
      }
    }
  };

  return (
    <LanguageProvider>
      <MobileMenuDrawerProvider>
        <PopupProvider>
          <ContactModalProvider>
            <ContactFormProvider>
              <FoodMenuProvider>
                <Router history={hist}>
                  <Switch>
                    <Route exact path={"/virtual-event/aid"} component={AID} />
                    <Route path="/mrg" component={MRG} />
                    <Route path="/golf" component={Golf} />
                    <Route path="/village" component={Village} />
                    <Route path="/airboats" component={Airboats} />
                    <Route path="/history" component={History} />
                    <Route path="/administration" component={Administration} />
                    <Route path="/" component={Miccosukee} />
                  </Switch>
                </Router>
                {renderSnackbar()}
              </FoodMenuProvider>
            </ContactFormProvider>
          </ContactModalProvider>
        </PopupProvider>
      </MobileMenuDrawerProvider>
    </LanguageProvider>
  );
};

export default App;
