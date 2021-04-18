<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <vuex-search-list></vuex-search-list>
  </div>
</template>

<script>
import VuexSearchList from "./components/VuexSearchList";

export default {
  name: 'App',
  components: {
    VuexSearchList
  }
}
</script>
