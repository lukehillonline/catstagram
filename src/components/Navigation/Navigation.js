import { makeStyles } from "@material-ui/core/styles";
import { NavigationItem } from "components";
import { pxToREM } from "utils";

const useStyles = makeStyles({
  nav: {
    display: "flex",
    justifyContent: "center",
  },
  NavigationItem: {
    marginLeft: pxToREM(20),
    marginRight: pxToREM(20),
  },
});

export function Navigation() {
  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      <NavigationItem href="/" styleOverride={classes.NavigationItem}>
        Home
      </NavigationItem>
      <NavigationItem href="/upload" styleOverride={classes.NavigationItem}>
        Upload
      </NavigationItem>
    </nav>
  );
}
