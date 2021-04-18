<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <vuex-search-form></vuex-search-form>
    <vuex-search-list></vuex-search-list>
  </div>
</template>

<script>
import VuexSearchList from "./components/VuexSearchList";
import VuexSearchForm from "./components/VuexSearchForm";

export default {
  name: 'App',
  components: {
    VuexSearchList,
    VuexSearchForm
  }
}
</script>
