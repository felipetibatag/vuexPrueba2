import * as types from "./mutations_types";

export default {
  [types.MODIFICAR_TITULO](state, tituloNuevo) {
    state.titulo = tituloNuevo;
  },
  [types.MODIFICAR_CONTADOR](state) {
    state.contador++;
  }
};
