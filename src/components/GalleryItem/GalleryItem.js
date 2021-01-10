import { makeStyles } from "@material-ui/core/styles";
import { pxToREM } from "utils";

const useStyles = makeStyles({
  container: ({ url }) => ({
    backgroundImage: `url(${url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    flex: "0 0 23%",
    margin: "1%",

    "&:before": {
      content: '""',
      display: "block",
      paddingTop: "100%",
    },
  }),
});

export function GalleryItem({ data }) {
  const classes = useStyles({ url: data.url });

  return <div className={classes.container}></div>;
}
