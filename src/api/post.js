const axios = require("axios");

/**
 * A handler to make post requests
 *
 * @param {string} path the path of the delete request
 * @param {object} data an object of data to send
 * @param {object} headers the http headers
 */
export async function post({ path, data, headers }) {
  let response;

  await axios
    .post(path, data, { headers })
    .then((responseData) => (response = responseData));

  return response;
}
