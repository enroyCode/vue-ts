import axios from 'axios'
import CommonUtil from '../utils/CommonUtil'

axios.defaults.timeout = 60000
export default class BaseApi {

  static create(baseUrl: string) {
    let instance = axios.create({
      baseURL: baseUrl,
      withCredentials: true//携带cookie
    });

    instance.interceptors.request.use(function (config) {
      config.headers['trace_id'] = CommonUtil.uuid();
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
        // if (ResponseUtil.checkResponseCode(response.data.code)) {
        //   if (response.data.message) {
        //     error.message = response.data.message[0]
        //   } else {
        //     error.message = response.status + '服务器内部异常'
        //   }
        // } else {
        //   error.message = ''
        // }
        // (error as any).response = response.data
        throw error
      }
    }, function (error) {
      if (!error.response) {
        error.message = '请检查网络设置';
        return Promise.reject(error)
      }
      // switch (error.response.status) {
      //   case 101:
      //     break
      //   case 401:
      //     error.message = '登录已过期,请重新登录!'
      //     ShortcutMgr.logout()
      //     break
      //   case 403:
      //     error.message = '禁止访问!'
      //     break
      //   case 503:
      //     error.message = '服务器升级中!'
      //     break
      //   case 500:
      //     error.message = '服务内部异常!'
      //     break
      //   default:
      //     error.message = '未知错误'
      // }
      return Promise.reject(error)
    });
    return instance
  }
}
