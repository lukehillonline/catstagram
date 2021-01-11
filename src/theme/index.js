import { createMuiTheme } from "@material-ui/core/styles";
import { pxToREM } from "utils";

const colors = {
  primary: {
    focus: "#BBE0FF", // Focus Blue
    hover: "#509CDC", // Hover Blue
    main: "#006FCF", // Bright Blue
  },
  secondary: {
    main: "#00175A", // Deep Blue
    shadow: "rgba(0, 23, 90, 0.5)", // shadow-blue
  },
  error: {
    main: "#B71C1C", // Primary Red Error
  },
  success: {
    main: "#2BB817", // Accept Green
  },
  text: {
    primary: "#747474",
    secondary: "#FFFFFF",
  },
};

const typography = {
  h1: {
    color: colors.primary.main,
    fontSize: pxToREM(14),
    fontWeight: "700",
    letterSpacing: pxToREM(5),
    lineHeight: 1.25,
    textTransform: "uppercase",
  },
  body1: {
    fontSize: pxToREM(16),
    lineHeight: pxToREM(21),
  },
  button: {
    fontSize: pxToREM(16),
    lineHeight: pxToREM(28),
    textTransform: "uppercase",
  },
};

/**
 * THEME
 * https://material-ui.com/customization/theming/
 */
const theme = createMuiTheme({
  /**
   * PALETTE
   */
  palette: {
    ...colors,
  },

  /**
   * FONT FAMILY
   */

  /**
   * TYPOGRAPHY
   */
  typography: {
    ...typography,
  },

  /**
   * OVERRIDES
   */
  overrides: {
    /**
     * GLOBAL
     * https://material-ui.com/customization/globals/#global-css
     */

    MuiCssBaseline: {
      "@global": {
        "html, body, #root": {
          height: "100%",
        },
      },
    },

    /**
     * ------------
     *  COMPONENTS
     * ------------
     */

    /**
     * LINK
     * https://material-ui.com/api/link/
     */
    MuiLink: {
      root: {
        cursor: "pointer",
        fontWeight: "bold",
        padding: `${pxToREM(10)} ${pxToREM(20)}`,
        textTransform: "uppercase",
      },
    },
  },
});

export default theme;
