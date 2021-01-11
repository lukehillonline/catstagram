import { useMutation } from "react-query";
import { post } from "api";

/**
 * Uploads a new image, expects a data object like this:
 * data: {
 *    file: -FILE-
 * }
 */
export function useUploadCat() {
  const { mutate, status, error, reset } = useMutation(({ data }) =>
    post({
      path: `${process.env.REACT_APP_CAT_API_URL}/images/upload`,
      data,
      headers: {
        "x-api-key": process.env.REACT_APP_CAT_API_KEY,
        "Content-Type": "multipart/form-data",
      },
    })
  );

  return {
    uploadCat: mutate,
    status,
    error,
    reset,
  };
}
