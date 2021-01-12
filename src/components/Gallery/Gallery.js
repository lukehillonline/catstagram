import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useGetCats, useGetVotes } from "lib";
import { GalleryItem, Loading } from "components";
import { pxToREM } from "utils";

const useStyles = makeStyles({
  container: ({ status }) => ({
    display: "flex",
    flexWrap: "wrap",
    marginBottom: pxToREM(40),
    minHeight: status === "loading" ? pxToREM(300) : null,
  }),
});

/**
 * This component renders a gallery of images
 */
export function Gallery() {
  const cats = useGetCats();
  const votes = useGetVotes();
  const classes = useStyles({ status: cats.status });

  return (
    <div className={classes.container}>
      {cats.status === "loading" ? (
        <Loading />
      ) : cats.status === "success" ? (
        cats.data.data.map((item) => (
          <GalleryItem
            key={item.id}
            data={item}
            votes={votes.status === "success" && votes}
          />
        ))
      ) : cats.status === "error" ? (
        <Typography color="error" align="center">
          Whoops, it appears something has gone wrong, please try again later.
        </Typography>
      ) : null}
    </div>
  );
}
