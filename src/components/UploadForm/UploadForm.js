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
    margin: `0 auto ${pxToREM(20)}`,
    maxWidth: pxToREM(500),
    padding: "25%",
    position: "relative",
    width: "100%",

    [theme.breakpoints.up("sm")]: {
      minHeight: pxToREM(400),
      padding: 0,
    },
  },
  previewIcon: {
    cursor: "pointer",
    display: "block",
    height: pxToREM(50),
    margin: `0 auto ${pxToREM(10)}`,
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
    margin: `0 auto ${pxToREM(20)}`,
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
            <Button
              variant="outlined"
              color="primary"
              onClick={triggerImageSelection}
            >
              Select Image
            </Button>
          </div>
        )}
      </div>

      <Button
        variant="contained"
        color="primary"
        className={classes.uploadButton}
        onClick={submitCat}
        disabled={!picture}
      >
        Upload
      </Button>

      <input
        ref={fileUploadInput}
        type="file"
        name="image"
        id="image"
        onChange={setImage}
        className={classes.hiddenInput}
        alt="image"
      />

      {showSuccess && (
        <Typography align="center" variant="h1">
          Image Uploaded Successfully
        </Typography>
      )}
      {status === "loading" && <Loading />}
      {status === "error" && <Typography color="error">{error}</Typography>}
    </div>
  );
}
