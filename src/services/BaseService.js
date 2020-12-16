class BaseService {
  constructor(host, endpoints, request) {
    this._host = host;
    this._endpoints = endpoints;
    this._request = request;
  }

  get url() {
    return this._host;
  }

  get endpoints() {
    return this._endpoints;
  }

  get request() {
    return this._request;
  }
}

export default BaseService;
