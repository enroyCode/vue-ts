import ApiClient from '../ApiClient.ts';

export default class LoginApi {
  static login(body: any) {
    let url = '/auth/login/forAdmin';
    return ApiClient.postHttp(url, body, null);
  }
}
