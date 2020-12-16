import axios from 'axios';

class Axios {
  async get(url, options) {
    try {
      const response = await axios.get(url, options);

      const respJson = {
        data: response.data,
        status:
          response.data && response.data.statusCode
            ? response.data.statusCode
            : response.status,
      };

      return respJson;
    } catch (error) {
      const respError = {
        message:
          error.response && error.response.message
            ? error.response.message
            : error.message,
        data: error.response && error.response.data ? error.response.data : {},
        status:
          error.response && error.response.status ? error.response.status : 417,
      };

      throw respError;
    }
  }
}

export default new Axios();
