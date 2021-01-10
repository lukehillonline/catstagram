import { useEffect, useState, useRef } from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import { useUploadCat } from "lib";
import { Loading } from "components";
import { pxToREM } from "utils";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
  },
  preview: {
    alignItems: "center",
    backgroundColor: theme.palette.grey["200"],
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    maxWidth: pxToREM(500),
    minHeight: pxToREM(400),
    position: "relative",
    width: "100%",
  },
  previewIcon: {
    cursor: "pointer",
    display: "block",
    height: pxToREM(50),
    margin: "0 auto",
    width: pxToREM(50),
  },
  previewImage: {
    maxHeight: pxToREM(400),
    maxWidth: "100%",
  },
  hiddenInput: {
    display: "none",
  },
  uploadButton: {
    display: "block",
    margin: "0 auto",
  },
}));

export function UploadForm() {
  const { uploadCat, status, error, reset } = useUploadCat();
  const [picture, setPicture] = useState();
  const [preview, setPreview] = useState();
  const [showSuccess, setShowSuccess] = useState(false);
  const fileUploadInput = useRef();
  const classes = useStyles();

  useEffect(() => {
    if (status === "success") {
      setShowSuccess(true);
      setPicture(null);
      setPreview(null);
      fileUploadInput.current.value = "";
      reset();
    }
  }, [status, picture, setPicture, reset]);

  function submitCat() {
    if (picture) {
      const formData = new FormData();
      formData.append("file", picture);

      uploadCat({ data: formData });
    }
  }

  function triggerImageSelection() {
    fileUploadInput.current.click();
  }

  function setImage(event) {
    if (event.target.files[0]) {
      const tempPicture = event.target.files[0];
      setPicture(tempPicture);
      setPreview(URL.createObjectURL(tempPicture));
      setShowSuccess(false);
    }
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.preview}>
        {picture && preview ? (
          <img
            src={preview}
            alt={picture.name}
            className={classes.previewImage}
          />
        ) : (
          <div>
            <ImageSearchIcon
              className={classes.previewIcon}
              onClick={triggerImageSelection}
            />
            <Button onClick={triggerImageSelection}>Select Image</Button>
          </div>
        )}
      </div>

      <Button className={classes.uploadButton} onClick={submitCat}>
        Upload
      </Button>

      <input
        ref={fileUploadInput}
        type="file"
        name="image"
        onChange={setImage}
        className={classes.hiddenInput}
      />

      {showSuccess && (
        <Typography variant="h1">Image Uploaded Successfully</Typography>
      )}
      {status === "loading" && <Loading />}
      {status === "error" && <Typography color="error">{error}</Typography>}
    </div>
  );
}
