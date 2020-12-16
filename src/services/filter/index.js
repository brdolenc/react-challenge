import { Host, Endpoints } from './config';
import { Axios } from '../common';
import BaseService from '../BaseService';

class Filter extends BaseService {
  constructor(host, endpoints, request) {
    super(host, endpoints, request);

    this.header = {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 60000
    };
  }

  async get() {
    const url = this.url + this.endpoints.filters;

    return this.request
      .get(url, this.header)
      .then((res) => res)
      .catch((e) => e);
  }
}

export default new Filter(Host, Endpoints, Axios);
