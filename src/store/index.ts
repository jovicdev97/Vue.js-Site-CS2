import { createStore } from 'vuex';
interface State {
  cookiesZugestimmt: boolean;
}
export default createStore({
  state: {
    cookiesZugestimmt: false,
  },
  mutations: {
    setCookiesZugestimmt(state: State, newValue: boolean) {
      state.cookiesZugestimmt = newValue;
    },
  },
  getters: {
    getCookiesZugestimmt(state: State) {
      return state.cookiesZugestimmt;
    },
  },
});