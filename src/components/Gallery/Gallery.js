import { makeStyles } from "@material-ui/core/styles";
import { useGetCats } from "lib";
import { GalleryItem, Loading } from "components";
import { pxToREM } from "utils";

const useStyles = makeStyles({
  container: ({ status }) => ({
    display: "flex",
    flexGrow: 1,
    flexWrap: "wrap",
    height: "100%",
    minHeight: status === "loading" ? pxToREM(300) : null,
    position: "relative",
  }),
});

export function Gallery() {
  const { data, status } = useGetCats();
  const classes = useStyles({ status });

  console.log("data", data);
  console.log("status", status);

  return (
    <div className={classes.container}>
      {status === "loading" ? (
        <Loading />
      ) : status === "success" ? (
        data.data.map((item) => <GalleryItem data={item} />)
      ) : (
        <>Error</>
      )}
    </div>
  );
}
