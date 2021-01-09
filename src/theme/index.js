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

const fontFamily = {
  body: "Benton Sans Reg, Helvetica, Arial, Lucida Grande, sans-serif",
  bodyBold: "Benton Sans Bd, Helvetica, Arial, Lucida Grande, sans-serif",
  display: "Akkurat, Helvetica, Arial, Lucida Grande, sans-serif",
};

const typography = {
  h1: {
    color: colors.secondary.main,
    fontFamily: fontFamily.display,
    fontSize: pxToREM(14),
    fontWeight: "700",
    letterSpacing: pxToREM(5),
    lineHeight: 1.25,
    textTransform: "uppercase",
  },
  h2: {
    color: colors.secondary.main,
    fontFamily: fontFamily.display,
    fontSize: pxToREM(11),
    fontWeight: "700",
    letterSpacing: pxToREM(5),
    lineHeight: pxToREM(15),
    textTransform: "uppercase",
  },
  h3: {
    color: colors.text.primary,
    fontFamily: fontFamily.bodyBold,
    fontSize: pxToREM(14),
    lineHeight: 1,
  },
  h4: {
    color: colors.text.primary,
    fontSize: pxToREM(12),
    lineHeight: pxToREM(14),
    textTransform: "uppercase",
  },
  h5: {
    color: colors.primary.main,
    fontFamily: fontFamily.bodyBold,
    fontSize: pxToREM(12),
    letterSpacing: pxToREM(4),
    lineHeight: pxToREM(16),
    textTransform: "uppercase",
  },
  h6: {
    color: colors.secondary.main,
    fontFamily: fontFamily.display,
    fontSize: pxToREM(9),
    letterSpacing: pxToREM(4),
    lineHeight: pxToREM(13),
    textTransform: "uppercase",
  },
  subtitle1: {
    color: colors.secondary.main,
    fontFamily: fontFamily.bodyBold,
    fontSize: pxToREM(12),
    lineHeight: pxToREM(14),
  },
  body1: {
    fontSize: pxToREM(14),
    lineHeight: pxToREM(21),
  },
  body2: {
    fontSize: pxToREM(12),
    lineHeight: pxToREM(20),
  },
  caption: {
    fontSize: pxToREM(11),
    lineHeight: pxToREM(16),
  },
  button: {
    fontSize: pxToREM(10),
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
  fontFamily,

  /**
   * TYPOGRAPHY
   */
  typography: {
    fontFamily: fontFamily.body,
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
        // Input Overrides
        "input::-ms-clear": {
          display: "none",
          width: 0,
          height: 0,
        },
        "input::-ms-reveal": {
          display: "none",
          width: 0,
          height: 0,
        },
      },
    },

    /**
     * ------------
     *  COMPONENTS
     * ------------
     */

    /**
     * BUTTONS
     * https://material-ui.com/api/button/
     */
    MuiButton: {
      root: {
        minWidth: "0",
        overflow: "hidden",
        paddingLeft: pxToREM(26),
        paddingRight: pxToREM(26),
        "&:disabled": {
          backgroundColor: colors.text.primary,
          color: colors.text.primary,
        },
      },
      text: {
        backgroundColor: "transparent",
        color: colors.text.primary,
        fontSize: pxToREM(11),
        lineHeight: pxToREM(16),
        textTransform: "none",
        "&:hover": {
          backgroundColor: "transparent",
          color: colors.primary.main,
        },
        "&:disabled": {
          backgroundColor: "transparent",
        },
      },
      textPrimary: {
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0)",
        },
        "&:disabled": {
          backgroundColor: "transparent",
        },
      },
      textSecondary: {
        "&:hover": {
          backgroundColor: "transparent",
        },
        "&:disabled": {
          backgroundColor: "transparent",
        },
      },
      outlined: {
        "&:disabled": {
          backgroundColor: colors.text.primary,
        },
      },
      containedPrimary: {
        "&:hover": {
          backgroundColor: colors.primary.hover,
        },
      },
      sizeSmall: {
        fontSize: pxToREM(12),
        lineHeight: pxToREM(24),
        padding: `${pxToREM(6)} ${pxToREM(26)}`,
      },
    },

    /**
     * DIALOG
     * https://material-ui.com/api/dialog/
     * https://material-ui.com/api/dialog-title/#dialogtitle-api
     * https://material-ui.com/api/dialog-content/#dialogcontent-api
     */
    MuiDialog: {
      root: {
        padding: 0,
        width: "100%",
      },
      paper: {
        width: "100%",
      },
      paperWidthMd: {
        maxWidth: pxToREM(480),
      },
      paperWidthLg: {
        maxWidth: pxToREM(600),
      },
    },
    MuiDialogTitle: {
      root: {
        display: "flex",
        padding: 0,
      },
    },
    MuiDialogContent: {
      root: {
        display: "flex",
        flexDirection: "column",
        padding: 0,

        "&:first-child": {
          paddingTop: 0,
        },
      },
    },

    /**
     * INPUTS
     * https://material-ui.com/api/input-base/#inputbase-api
     * https://material-ui.com/api/input/#input-api
     * https://material-ui.com/api/input-label/#inputlabel-api
     * https://material-ui.com/api/form-control/#formcontrol-api
     * https://material-ui.com/api/input-adornment/#inputadornment-api
     * https://material-ui.com/api/checkbox/#checkbox-api
     * https://material-ui.com/api/form-label/#formlabel-api
     */
    MuiInputBase: {
      root: {
        "&:disabled": {
          borderColor: colors.text.primary,
          borderStyle: "solid",
        },

        ".MuiFormControl-marginNormal &": {
          marginBottom: pxToREM(19),
        },

        ".MuiFormControl-marginDense &": {
          marginBottom: pxToREM(20),
        },

        "&.Mui-error": {
          marginBottom: 0,
        },
      },
    },
    MuiInput: {
      underline: {
        "&.Mui-disabled": {
          "&:before": {
            borderBottomStyle: "solid",
            borderColor: colors.text.primary,
          },
        },
      },
    },
    MuiInputLabel: {
      root: {
        color: colors.text.primary,
        "&:disabled": {
          color: colors.text.primary,
        },
      },
    },
    MuiFormControl: {
      root: {
        marginTop: pxToREM(8),
      },
      marginNormal: {
        marginBottom: pxToREM(5),
      },
      marginDense: {
        marginBottom: 0,
      },
    },
    MuiInputAdornment: {
      root: {
        ".Mui-error &": {
          "& svg": {
            color: colors.error.main,
          },
        },
        ".Mui-focused &": {
          "& svg": {
            color: colors.primary.main,
          },
        },
        "& .MuiIconButton-root": {
          height: pxToREM(36),
          padding: 0,
          width: pxToREM(36),
        },
        "& .MuiIconButton-label": {
          height: "100%",
          width: "100%",
        },
        "& svg": {
          height: "100%",
          width: "100%",
        },
      },
      marginDense: {
        "& .MuiIconButton-root": {
          height: pxToREM(28),
          padding: 0,
          width: pxToREM(28),
        },
      },
    },
    MuiCheckbox: {
      root: {
        alignSelf: "flex-start",

        "& .MuiSvgIcon-root": {
          height: pxToREM(14),
          width: pxToREM(14),
        },

        "& + .MuiFormControlLabel-label": {
          color: colors.text.primary,
        },
      },
      checked: {},
      disabled: {},
      indeterminate: {},
      colorPrimary: {
        color: colors.text.primary,

        "&:hover": {
          color: colors.primary.main,
        },
      },
      colorSecondary: {},
    },
    MuiFormLabel: {
      root: {
        "&.Mui-error .MuiCheckbox-root .MuiSvgIcon-root": {
          color: colors.error.main,
        },
      },
    },

    /**
     * LINK
     * https://material-ui.com/api/link/
     */
    MuiLink: {
      root: {
        cursor: "pointer",
        fontFamily: fontFamily.bodyBold,

        "&.MuiTypography-colorPrimary": {
          "&:hover": {
            color: colors.secondary.main,
          },
        },

        "&$focusVisible": {
          backgroundColor: colors.text.primary,
          borderRadius: pxToREM(3),
          boxShadow: `0 0 0 3px ${colors.text.primary}`,
          color: colors.secondary.main,
          outline: 0,
          textDecoration: "underline",
        },
      },
    },

    /**
     * STEPPER
     * https://material-ui.com/api/stepper/
     * https://material-ui.com/api/step/
     * https://material-ui.com/api/step-label/
     * https://material-ui.com/api/step-icon/
     */
    MuiStepLabel: {
      label: {
        color: colors.text.primary,
        ...typography.body2,

        "&.MuiStepLabel-alternativeLabel": {
          marginTop: pxToREM(11),
        },
      },
      active: {
        fontFamily: fontFamily.bodyBold,
      },
      completed: {
        cursor: "pointer",
      },
    },
    MuiStepIcon: {
      text: {
        fontFamily: fontFamily.bodyBold,
        ...typography.body2,
      },
      completed: {
        cursor: "pointer",
      },
    },

    /**
     * STEPPER - MOBILE STEPPER
     * https://material-ui.com/api/mobile-stepper/
     */
    MuiMobileStepper: {
      root: {
        backgroundColor: "transparent",
      },
      dot: {
        backgroundColor: "transparent",
        borderRadius: "100%",
        boxShadow: `0px 0px 0px 1px ${colors.text.primary}`,
        height: pxToREM(10),
        marginLeft: pxToREM(13),
        position: "relative",
        width: pxToREM(10),

        "&:first-child": {
          marginLeft: 0,
        },
      },
      dotActive: {
        backgroundColor: "transparent",
        boxShadow: `0px 0px 0px 1px ${colors.primary.main}`,

        "&:after": {
          backgroundColor: colors.primary.main,
          borderRadius: "100%",
          bottom: 0,
          content: '" "',
          height: pxToREM(8),
          left: 0,
          margin: "auto",
          position: "absolute",
          right: 0,
          top: 0,
          width: pxToREM(8),
        },
      },
    },

    /**
     * TOOLTIP
     * https://material-ui.com/api/tooltip/#tooltip-api
     */
    MuiTooltip: {
      tooltip: {
        backgroundColor: colors.secondary.main,
        fontFamily: fontFamily.bodyBold,
        ...typography.body2,
      },
      arrow: {
        color: colors.secondary.main,
      },
    },

    /**
     * TYPOGRAPHY
     * https://material-ui.com/api/typography/
     */
    MuiTypography: {
      gutterBottom: {
        marginBottom: pxToREM(20),
      },
    },
  },
});

export default theme;
