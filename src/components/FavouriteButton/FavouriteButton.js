import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { useDeleteFavourite, useSetFavourite } from "lib";
import { pxToREM } from "utils";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.primary.main,
    cursor: "pointer",
    height: pxToREM(50),
    width: pxToREM(50),
  },
}));

/**
 * This component renders a heart button that allows a user to favourite
 * an image
 *
 * @param {integer} imageId used to identify which image is being favourited
 * @param {function} showError option function to show error messages
 * @param {object} styleOverride style overrides
 */
export function FavouriteButton({ imageId, showError, styleOverride }) {
  const [favouriteId, setFavouriteId] = useState();
  const [active, setActive] = useState(false);
  const deleteFavourite = useDeleteFavourite();
  const setFavourite = useSetFavourite();
  const classes = useStyles();

  useEffect(() => {
    if (setFavourite.status === "success") {
      setActive(true);
      setFavouriteId(setFavourite.data.data.id);
    } else if (setFavourite.status === "error") {
      showError(
        "Whoops, it seems like your favourite couldn't be saved right now."
      );
      setFavourite.reset();
    }
  }, [setFavourite, showError]);

  useEffect(() => {
    if (deleteFavourite.status === "success") {
      setActive(false);
      setFavouriteId(null);
    } else if (deleteFavourite.status === "error") {
      showError(
        "Whoops, it seems like your favourite couldn't be saved right now."
      );
      deleteFavourite.reset();
    }
  }, [deleteFavourite, showError]);

  return (
    <>
      {active ? (
        <FavoriteIcon
          className={`${classes.icon} ${styleOverride}`}
          onClick={() =>
            deleteFavourite.deleteFavourite({
              favourite_id: favouriteId,
            })
          }
          tabIndex="0"
          title="Click to unfavourite"
        />
      ) : (
        <FavoriteBorderIcon
          className={`${classes.icon} ${styleOverride}`}
          onClick={() =>
            setFavourite.setFavourite({
              data: {
                image_id: imageId,
              },
            })
          }
          tabIndex="0"
          title="Click to favourite"
        />
      )}
    </>
  );
}
