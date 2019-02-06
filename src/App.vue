<template>
  <div id="app">
    <mostrar-datos-componente></mostrar-datos-componente>
    <modificar-datos-componente></modificar-datos-componente>
  </div>
</template>

<script>
import store from "./vuex/store.js";
import MostrarDatosComponente from "./components/MostrarDatosComponente.vue";
import ModificarDatosComponente from "./components/ModificarDatosComponente.vue";
export default {
  name: "app",
  components: { MostrarDatosComponente, ModificarDatosComponente },
  store
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
