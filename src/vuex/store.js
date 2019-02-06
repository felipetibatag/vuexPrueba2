import vue from "vue";
import vuex from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
vue.use(vuex);

export const state = {
  titulo: "Titulo prueba",
  contador: 0
};

export default new vuex.Store({
  getters,
  mutations,
  actions,
  state
});
