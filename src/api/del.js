const axios = require("axios");

/**
 * A handler to make delete requests
 *
 * @param {string} path the path of the delete request
 * @param {object} params an object of parameters
 * @param {object} headers the http headers
 */
export async function del({ path, params, headers }) {
  let response;

  await axios
    .delete(path, { params, headers })
    .then((responseData) => (response = responseData));

  return response;
}
