import { makeStyles } from "@material-ui/core/styles";
import { Navigation, Logo } from "components";
import { pxToREM } from "utils";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    margin: "0 auto",
    maxWidth: pxToREM(1000),
    paddingLeft: pxToREM(20),
    paddingRight: pxToREM(20),
  },
  Logo: {
    display: "block",
    margin: `${pxToREM(20)} auto`,
  },
});

/**
 * The base layout that renders common components
 */
export function BaseLayout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Logo styleOverrides={classes.Logo} />
      <Navigation />
      <main>{children}</main>
    </div>
  );
}
