import { makeStyles } from "@material-ui/core/styles";
import { pxToREM } from "utils";
import { Navigation, Logo } from "components";

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
  main: {
    display: "flex",
    flexGrow: 1,
  },
});

export function BaseLayout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Logo styleOverrides={classes.Logo} />
      <Navigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
}
