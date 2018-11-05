import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class Login extends Vue {

  name: string = ''
  pwd: string = ''

  mounted() {
    console.log(1111);
  }
}
