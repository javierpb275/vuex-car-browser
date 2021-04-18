<template>
    <section id="what-we-do">
        <b-container fluid>
            <h2 class="section-title mb-2 h1">
                Cars Available <b>({{ filteredCars.length }})</b>
            </h2>
            
            <b-row
                v-for="row in Math.ceil(filteredCars.length / numberOfColumns)"
                :key="row"
            >
                <b-col
                    v-for="car in filteredCars.slice((row - 1) * numberOfColumns, row * numberOfColumns)"
                    :key="car.id"
                >
                    <b-card :title="carModel(car.car_model)">
                        <div :class="'card-block ' + blockRandom()">
                            <h3 class="card-title">
                                Year: {{ car.car_model_year }}
                            </h3>
                            <p class="card-text">
                                Final Price: {{ car.price }}<br />
                                Available: {{ available(car.available) }}
                            </p>
                        </div>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </section>
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