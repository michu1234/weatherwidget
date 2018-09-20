<template>
  <div class="singlecity">
    <v-layout row wrap mb-2>
      <v-flex xs12>
        <v-card color="yellow lighten-5" class="dark--text">
          <v-layout row>
            <v-flex xs7>
              <v-card-title primary-title>
                <div>
                  <div class="headline">Weather details:</div>
                    <v-divider></v-divider>
                  <div>wind speed: {{windSpeed | unit("kn")}} </div>
                   <v-divider></v-divider>
                  <div>air pressure: {{airPressure | unit("hPa")}}</div>
                    <v-divider></v-divider>
                  <div>humidity: {{humidity | unit("%")}}</div>
                    <v-divider></v-divider>
                </div>
              </v-card-title>
            </v-flex>
            <v-flex xs5>
              <v-img :src="weatherIcon" height="125px"
                contain></v-img>
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
  import Chart from './Chart.vue';
  import {
    mapState
  } from 'vuex';

  export default {
    name: 'singlecity',
    components: {
      'vue-chart': Chart
    },
    props: {
      msg: String
    },
    computed: {
      ...mapState([
        'windSpeed',
        'airPressure',
        'humidity',
        'weatherIcon'
      ])
    },
    filters: {
      unit(data, unit) {
        return `${data}${unit}`
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
