import { makeStyles } from "@material-ui/core/styles";
import { FavouriteButton, Vote } from "components";
import { pxToREM } from "utils";

const useStyles = makeStyles((theme) => ({
  container: ({ url }) => ({
    backgroundImage: `url(${url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    flex: "0 0 90%",
    margin: "5%",
    position: "relative",

    "&:before": {
      content: '""',
      display: "block",
      paddingTop: "100%",
    },

    [theme.breakpoints.up("sm")]: {
      flex: "0 0 29%",
      margin: "2%",
    },

    [theme.breakpoints.up("md")]: {
      flex: "0 0 23%",
      margin: "1%",
    },
  }),
  favouriteButton: {
    position: "absolute",
    right: pxToREM(10),
    top: pxToREM(10),
  },
}));

export function GalleryItem({ data }) {
  const classes = useStyles({ url: data.url });

  return (
    <div className={classes.container}>
      <FavouriteButton
        imageId={data.id}
        styleOverride={classes.favouriteButton}
      />
      <Vote imageId={data.id} />
    </div>
  );
}
