const axios = require("axios");

export async function del({ path, params, headers }) {
  let response;

  await axios
    .delete(path, { params, headers })
    .then((responseData) => (response = responseData));

  return response;
}
