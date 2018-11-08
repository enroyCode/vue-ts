import axios from 'axios'
import CommonUtil from '../utils/CommonUtil.ts'

const qs = require('qs');
axios.defaults.paramsSerializer = params => {
  return qs.stringify(params, { arrayFormat: 'repeat' })
};
axios.defaults.timeout = 60000;
const baseUrl = 'http://localhost:8081/boot-service';
export default class ApiClient {

  static getHttp(url: string, params: any) {
    return this.create(baseUrl).get(url, { params: params });
  }

  static postHttp(url: string, body: any, params?: any) {
    return this.create(baseUrl).post(url, body, { params: params });
  }

  static create(baseUrl: string) {
    let instance = axios.create({
      baseURL: baseUrl,
      withCredentials: true//携带cookie
    });

    instance.interceptors.request.use(function (config) {
      config.headers['trace_id'] = CommonUtil.uuid();
      config.headers['Content-Type'] = 'application/json;charset=UTF-8';
      return config
    }, function (error) {
      return Promise.reject(error)
    });

    instance.interceptors.response.use(function (response) {
      if (response.data instanceof ArrayBuffer) {
        return response
      }
      if (response.data.success) {
        return response
      } else {
        let error = new Error();
        error.message = response.data.message;
        throw error;
      }
    }, function (error) {
      if (!error.response) {
        error.message = '请检查网络设置';
        return Promise.reject(error)
      }
      return Promise.reject(error)
    });
    return instance
  }
}
