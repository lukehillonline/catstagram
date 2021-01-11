import { makeStyles } from "@material-ui/core/styles";
import { pxToREM } from "utils";
import PetsIcon from "@material-ui/icons/Pets";

const useStyles = makeStyles({
  logo: {
    height: "auto",
    maxHeight: pxToREM(150),
    maxWidth: pxToREM(150),
    width: "20%",
  },
});

export function Logo({ styleOverrides }) {
  const classes = useStyles();
  return <PetsIcon className={`${classes.logo} ${styleOverrides}`} />;
}
