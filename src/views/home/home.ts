import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'
import User from 'model/user/User';
import ZcPanel from '@/components/view/zc-panel.vue';

@Component({
  name: 'home', components: {
    ZcPanel
  }
})
export default class Home extends Vue {
  @State('user')
  user: User;

  mounted() {
    if (this.user === null || this.user.uuid === null) {
      this.$router.push('login');
    }
  }
}
