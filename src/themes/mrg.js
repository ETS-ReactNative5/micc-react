// MRG Website Theme - colors, fonts, etc.
import { createMuiTheme } from "@material-ui/core/styles";
import { mrgColor } from "./colors.js";

//orange is used for testing... since default primary is purple

export const mrgTheme = createMuiTheme({
  overrides: {
    // Style sheet name
    MuiButton: {
      // Name of the rule
      containedPrimary: {
        backgroundColor: `${mrgColor[500]} !important`,
        boxShadow: `0 2px 2px 0 ${mrgColor[500]}14, 0 3px 1px -2px ${mrgColor[500]}20, 0 1px 5px 0 ${mrgColor[500]}12 !important`,
        "&:hover,&:focus": {
          backgroundColor: `${mrgColor[500]} !important`,
          boxShadow: `0 14px 26px -12px ${mrgColor[500]}42, 0 4px 23px 0px #00000012, 0 8px 10px -5px ${mrgColor[500]}20 !important`,
        },
      },
    },
    MuiTypography: {
      // colorInherit property is used only to style links.
      // component example) <Link to={`/`}><Typography color="inherit" variant="inherit"></Links>
      colorInherit: {
        color: `${mrgColor[500]}`,
      },
      h1: {},
      paragraph: {},
    },
  },
});
