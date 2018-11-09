import Vue from 'vue'
import Component from 'vue-class-component'
import LoginApi from '../../api/login/LoginApi.ts';
import { SET_USER } from '../../store/mutation-types';

@Component({})
export default class Login extends Vue {

  username: string = '';
  password: string = '';

  // mounted() {
  // }

  login() {
    let body = { principle: this.username, password: this.password };
    LoginApi.login(body).then(res => {
      if (res.data.success) {
        this.$store.commit(SET_USER, res.data.data.employee);
        this.$router.push('Home');
      }
    }).catch(e => {
      console.log(e)
    });
  }
}
