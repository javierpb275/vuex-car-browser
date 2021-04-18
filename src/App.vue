<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <vuex-search></vuex-search>
  </div>
</template>

<script>
import VuexSearch from "./components/VuexSearch";

export default {
  name: 'App',
  components: {
    VuexSearch
  }
}
</script>
