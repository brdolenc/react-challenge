import { Host, Endpoints } from './config';
import { Axios } from '../common';
import BaseService from '../BaseService';

class Spotify extends BaseService {
  constructor(host, endpoints, request) {
    super(host, endpoints, request);

    this.header = {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 60000
    };
  }

  authorizationHeader(type, token) {
    this.header.headers.Authorization = `${type} ${token}`;
  }

  async getProfile(authType, authToken) {
    this.authorizationHeader(authType, authToken);

    const url = this.url + this.endpoints.userProfile;

    return this.request
      .get(url, this.header)
      .then((res) => res)
      .catch((e) => e);
  }

  async getPlaylists(authType, authToken, filter = false) {
    this.authorizationHeader(authType, authToken);

    const url = this.url + this.endpoints.playlists;

    if (filter) {
      this.header.params = filter;
    }

    return this.request
      .get(url, this.header)
      .then((res) => res)
      .catch((e) => e);
  }
}

export default new Spotify(Host, Endpoints, Axios);
