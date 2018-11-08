import Vue from 'vue'
import Component from 'vue-class-component'
import LoginApi from '../../api/login/LoginApi.ts';

@Component({})
export default class Login extends Vue {

  name: string = '';
  pwd: string = '';

  mounted() {
    console.log(1111)
  }

  login() {
    let body = { username: this.name, password: this.pwd };
    LoginApi.login(body).then(res => {
      console.log(res)
    }).catch(e => {
      console.log(e)
    });
  }
}
