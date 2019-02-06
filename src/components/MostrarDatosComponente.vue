<template>
  <div>
    <p>Mostrat datos : {{getTitulo}}</p>
    <p>Contador:{{getContador}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getTitulo", "getContador"])
};
</script>

<style>
</style>
