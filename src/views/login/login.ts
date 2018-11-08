import Vue from 'vue'
import Component from 'vue-class-component'
import LoginApi from '../../api/login/LoginApi.ts';
import { SET_USER } from '../../store/mutation-types';

@Component({})
export default class Login extends Vue {

  name: string = '';
  pwd: string = '';

  mounted() {
    console.log(1111)
  }

  login() {
    let body = { principle: this.name, password: this.pwd };
    LoginApi.login(body).then(res => {
      if (res.data.success) {
        this.$store.commit(SET_USER, res.data.data.employee);
      }
    }).catch(e => {
      console.log(e)
    });
  }
}
