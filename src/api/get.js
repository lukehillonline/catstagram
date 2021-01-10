const axios = require("axios");

export async function get({ path, params, headers }) {
  let response;

  await axios
    .get(path, { params, headers })
    .then((responseData) => (response = responseData));

  return response;
}
