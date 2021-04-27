import React, { useContext, useEffect } from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// context
import { LanguageProvider } from "./contexts/languageContext.js";
//import { AlertProvider } from "contexts/AlertContext.js";

// demo pages for this product
import Components from "views/_demo_Components/Components.js";
import LandingPage from "views/_demo_LandingPage/LandingPage.js";
import ProfilePage from "views/_demo_ProfilePage/ProfilePage.js";
import LoginPage from "views/_demo_LoginPage/LoginPage.js";

// context
import { AlertContext } from "contexts/AlertContext.js";

// Snackbar
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Check from "@material-ui/icons/Check";

// my pages
import Miccosukee from "views/Miccosukee";
import MRG from "views/MRG";
import AID from "views/Miccosukee/Pages/virtual_event/21_americanIndianDay.js";

var hist = createBrowserHistory();

const App = () => {
  const [alerts, setAlerts] = useContext(AlertContext);

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
            <b>Message Sent Successfully:</b> Now P$ gonna send you some cool
            stuff.
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
      <Router history={hist}>
        <Switch>
          <Route exact path="/landing-page" component={LandingPage} />
          <Route exact path="/profile-page" component={ProfilePage} />
          <Route exact path="/login-page" component={LoginPage} />
          <Route exact path="/components" component={Components} />
          <Route exact path={"/virtual-event/aid"} component={AID} />
          <Route path="/mrg" component={MRG} />
          <Route path="/" component={Miccosukee} />
        </Switch>
      </Router>
      {renderSnackbar()}
    </LanguageProvider>
  );
};

export default App;
