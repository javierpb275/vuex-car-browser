<template>
    <div>
        test
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
      data () {
        return {
          numberOfColumns: 3
        }
      },
      computed: {
        ...mapGetters(['filteredCars'])
      },
      methods: {
        available (bool) {
          return bool ? 'Yes' : 'No'
        } ,
        carModel (carModel) {
          return `Model: ${carModel}`
        },
        blockRandom () {
          return `block-${Math.floor(Math.random() * 6) + 1}`//return random number between 1 - 6. class block
        }
      }
    }
</script>

<style lang="stylus">
 @import "../assets/search.styl"; 
</style>