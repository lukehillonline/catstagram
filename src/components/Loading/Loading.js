import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    color: theme.palette.grey["50"],
    position: "absolute",
    zIndex: theme.zIndex.modal,
  },
}));

/**
 * Renders a spinning loading animation
 */
export function Loading() {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
