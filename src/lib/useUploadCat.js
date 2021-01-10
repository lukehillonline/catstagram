import { useMutation } from "react-query";
import { post } from "api";

export function useUploadCat() {
  const { mutate, status, error } = useMutation(({ data }) =>
    post({
      path: `${process.env.REACT_APP_CAT_API_URL}/images/upload`,
      data,
      headers: {
        "x-api-key": process.env.REACT_APP_CAT_API_KEY,
        "Content-Type": "multipart/form-data",
      },
    })
  );

  // const [mutate, { status, error }] = useMutation((data) =>

  // );

  return {
    uploadCat: mutate,
    status,
    error,
  };
}
