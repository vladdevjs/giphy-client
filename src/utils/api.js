import { API_KEY } from './utils';

class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`${res.statusText} (${res.status})`);
  }

  getTrending(limit = 9, offset = 0) {
    return fetch(`${this.baseUrl}/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset}`, {
      headers: this.headers,
    }).then((res) => this._checkResponse(res));
  }

  getRandom() {
    return fetch(`${this.baseUrl}/random?api_key=${API_KEY}`, {
      headers: this.headers,
    }).then((res) => this._checkResponse(res));
  }

  searchImages(searchQuery, limit = 9, offset = 0) {
    return fetch(`${this.baseUrl}/search?api_key=${API_KEY}&q=${searchQuery}&limit=${limit}&offset=${offset}`, {
      headers: this.headers,
    }).then((res) => this._checkResponse(res));
  }
}

const api = new Api({
  baseUrl: `https://api.giphy.com/v1/gifs`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
