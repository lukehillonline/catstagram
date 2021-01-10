const axios = require("axios");

export async function post({ path, data, headers }) {
  let response;

  await axios
    .post(path, data, { headers })
    .then((responseData) => (response = responseData));

  return response;
}
