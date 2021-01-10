import { useEffect, useState } from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useUploadCat } from "lib";
import { Loading } from "components";

const useStyles = makeStyles({
  wrapper: {
    position: "relative",
  },
});

export function UploadForm() {
  const { uploadCat, status, error } = useUploadCat();
  const [picture, setPictiure] = useState();
  const [preview, setPreview] = useState();

  const classes = useStyles();

  function submitCat() {
    if (picture) {
      const formData = new FormData();
      formData.append("file", picture);

      uploadCat({ data: formData });
    }
  }

  useEffect(() => {
    console.log(picture);
    if (picture) {
      setPreview(URL.createObjectURL(picture));
    }
  }, [picture]);

  useEffect(() => {
    if (status === "success" && picture) {
      setPictiure(null);
    }
  }, [status, picture, setPictiure]);

  return (
    <div className={classes.wrapper}>
      {picture && preview && <img src={preview} alt={picture.name} />}

      <input
        type="file"
        name="image"
        onChange={(event) => setPictiure(event.target.files[0])}
      />

      <Button onClick={submitCat}>Upload</Button>

      {status === "loading" && <Loading />}
      {status === "error" && <Typography color="error">{error}</Typography>}
    </div>
  );
}
