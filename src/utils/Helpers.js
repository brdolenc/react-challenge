class Helpers {
  /**
   * Retornas os parametros da query string atual.
   *
   * @return {Array}
   *
   */
  static getQueryStringParams() {
    const query = new URLSearchParams(window.location.hash.substring(1));
    const response = {};

    for (let q of query) {
      response[q[0]] = q[1];
    }

    return response;
  }
}

export default Helpers;
