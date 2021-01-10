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

export function FavouriteButton({ imageId, styleOverride }) {
  const [favouriteId, setFavouriteId] = useState();
  const [active, setActive] = useState(false);
  const deleteFavourite = useDeleteFavourite();
  const setFavourite = useSetFavourite();
  const classes = useStyles();

  useEffect(() => {
    if (setFavourite.status === "success") {
      setActive(true);
      setFavouriteId(setFavourite.data.data.id);
    }
  }, [setFavourite.status, setFavourite.data]);

  useEffect(() => {
    if (deleteFavourite.status === "success") {
      setActive(false);
      setFavouriteId(null);
    }
  }, [deleteFavourite.status]);

  return active ? (
    <FavoriteIcon
      className={`${classes.icon} ${styleOverride}`}
      onClick={() =>
        deleteFavourite.deleteFavourite({
          favourite_id: favouriteId,
        })
      }
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
    />
  );
}
