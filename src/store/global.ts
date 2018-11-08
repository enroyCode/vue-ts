import { Commit, ActionTree } from 'vuex'
import User from '../model/user/User.ts';
import { SET_USER, LOGIN_OUT } from './mutation-types.ts';

export interface State {
  user: Nullable<User>
}

export const state: State = {
  user: null
};
/**
 *  mutation 都是同步事务
 * @type {{}}
 */
export const mutations = {
  [SET_USER](state: State, data: User) {
    // localStorage.user = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey);
    state.user = data;
  },
  [LOGIN_OUT](state: State) {
    state.user = null
  }
};
/**
 * 可以认为是计算属性，不会缓存数据
 * @type {{}}
 */
export const getters = {};

/**
 * Action 类似于 mutation，区别在于：
 *  1、Action 提交的是 mutation，而不是直接变更状态。
 *  2、Action 可以包含任意异步操作。
 * Action 通过 store.dispatch 方法触发，我们可以在 action 内部执行异步操作
 * 在组件中使用 this.$store.dispatch('xxx') 分发 action，或者使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用
 */
export const actions: ActionTree<State, any> = {
  user(context: { commit: Commit }, user: User) {
    context.commit(SET_USER, user)
  },
  clear(context: { commit: Commit }) {
    context.commit(LOGIN_OUT)
  }
};
export default { state, getters, mutations, actions }
