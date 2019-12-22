import axios from 'axios'
import config from './config';

class Axios {
  constructor(config) {
    this.instance = axios.create({ ...config })
  }

  async get(url) {
    try {
      const response = await this.instance.get(url);
      return response;
    }
    catch (error) {
      console.log(error)
    }
  }

  async post(url, data) {
    try {
      const response = await this.instance.post(url, data);
      return response;
    }
    catch (error) {
      console.log(error)
    }
  }
}

export default new Axios(config);
