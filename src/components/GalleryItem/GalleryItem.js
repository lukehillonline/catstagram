import { useRef, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FavouriteButton, Vote, ErrorNotification } from "components";
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

/**
 * This component renders a singular gallery item which also renders the
 * favourite and voting buttons
 *
 *
 * @param {object} data the data about the gallery item
 */
export function GalleryItem({ data }) {
  const [errorMessage, setErrorMessage] = useState();
  const errorTimer = useRef();
  const classes = useStyles({ url: data.url });

  useEffect(() => {
    return () => {
      clearTimeout(errorTimer.current);
    };
  });

  function showError(message) {
    clearTimeout(errorTimer.current);
    setErrorMessage(message);
    errorTimer.current = setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  }

  return (
    <>
      <div className={classes.container}>
        <FavouriteButton
          imageId={data.id}
          showError={showError}
          styleOverride={classes.favouriteButton}
        />
        <Vote imageId={data.id} showError={showError} />
      </div>

      {errorMessage && <ErrorNotification>{errorMessage}</ErrorNotification>}
    </>
  );
}
