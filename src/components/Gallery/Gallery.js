import { makeStyles } from "@material-ui/core/styles";
import { useGetCats } from "lib";
import { GalleryItem, Loading } from "components";
import { pxToREM } from "utils";

const useStyles = makeStyles({
  container: ({ status }) => ({
    display: "flex",
    flexWrap: "wrap",
    minHeight: status === "loading" ? pxToREM(300) : null,
    position: "relative",
  }),
});

export function Gallery() {
  const { data, status } = useGetCats();
  const classes = useStyles({ status });

  return (
    <div className={classes.container}>
      {status === "loading" ? (
        <Loading />
      ) : status === "success" ? (
        data.data.map((item, index) => <GalleryItem key={index} data={item} />)
      ) : (
        <>Error</>
      )}
    </div>
  );
}
