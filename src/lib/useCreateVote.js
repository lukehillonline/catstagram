import { useMutation } from "react-query";
import { post } from "api";

export function useCreateVote() {
  const { mutate, status, error, reset } = useMutation(({ data }) =>
    post({
      path: `${process.env.REACT_APP_CAT_API_URL}/votes`,
      data,
      headers: {
        "x-api-key": process.env.REACT_APP_CAT_API_KEY,
      },
    })
  );

  return {
    createVote: mutate,
    status,
    error,
    reset,
  };
}
