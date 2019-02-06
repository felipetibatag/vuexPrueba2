import * as types from "./mutations_types";
export default {
  cambiarTitulo: ({ commit }, tituloNuevo) => {
    commit(types.MODIFICAR_TITULO, tituloNuevo);
  },
  cambiarContador: ({ commit }) => {
    commit(types.MODIFICAR_CONTADOR);
  }
};
