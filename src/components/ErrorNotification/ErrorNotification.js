import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { pxToREM } from "utils";

const useStyles = makeStyles((theme) => ({
  message: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
    left: pxToREM(10),
    maxWidth: "90%",
    padding: pxToREM(10),
    position: "fixed",
    top: pxToREM(10),
    width: "auto",
    zIndex: 10,
  },
}));

/**
 * This component renders a error notification
 */
export function ErrorNotification({ children }) {
  const classes = useStyles();
  return <Typography className={classes.message}>{children}</Typography>;
}
