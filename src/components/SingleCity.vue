<template>
  <div class="singlecity">
              <v-layout row wrap mb-2>
            <v-flex xs12>
              <v-card color="purple" class="white--text">
                <v-layout row>
                  <v-flex xs7>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Halycon Days</div>
                        <div>Ellie Goulding</div>
                        <div>(2013)</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                  <v-flex xs5>
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png" height="125px" contain></v-img>
                  </v-flex>
                </v-layout>
                <v-divider light></v-divider>
                <v-card-actions class="pa-3">
                  <vue-chart></vue-chart>
                </v-card-actions>
                <v-card-actions class="pa-3">
                  Rate this weather forecast
                  <v-spacer></v-spacer>
                  <v-icon>star_border</v-icon>
                  <v-icon>star_border</v-icon>
                  <v-icon>star_border</v-icon>
                  <v-icon>star_border</v-icon>
                  <v-icon>star_border</v-icon>
                </v-card-actions>
                        
              </v-card>
            </v-flex>
              </v-layout>
  </div>
</template>

<script>
  import Chart from './Chart.vue'

export default {
  name: 'singlecity',
  components: {
    'vue-chart': Chart
  },
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

</style>
