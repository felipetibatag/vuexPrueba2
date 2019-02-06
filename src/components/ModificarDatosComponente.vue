<template>
  <div>
    Modificar datos
    <input
      :value="getTitulo"
      type="text"
      @input="cambiarTitulo($event.target.value)"
      @keyup.enter="cambiarContador"
    >
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getTitulo"]),
  methods: mapActions(["cambiarTitulo", "cambiarContador"])
};
</script>

<style>
</style>
