import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useGetCats } from "lib";
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
  const { data, status } = useGetCats();
  const classes = useStyles({ status });

  return (
    <div className={classes.container}>
      {status === "loading" ? (
        <Loading />
      ) : status === "success" ? (
        data.data.map((item) => <GalleryItem key={item.id} data={item} />)
      ) : status === "error" ? (
        <Typography color="error" align="center">
          Whoops, it appears something has gone wrong, please try again later.
        </Typography>
      ) : null}
    </div>
  );
}
