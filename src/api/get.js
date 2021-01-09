const axios = require("axios");

export async function get({ path, headers }) {
  let response;

  await axios
    .get(path, headers)
    .then((responseData) => (response = responseData));

  return response;
}
