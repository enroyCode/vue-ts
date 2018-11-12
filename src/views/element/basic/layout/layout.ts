import { Component, Vue } from 'vue-property-decorator'
import ZcPanel from '@/components/view/zc-panel.vue';

@Component({
  name: 'home', components: {
    ZcPanel
  }
})
export default class Layout extends Vue {

}
