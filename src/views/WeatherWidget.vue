<template>
  <div class="singlecity">
    <div id="e3" style="max-width: 400px; margin: 20px auto;" class="grey lighten-3">
      <v-toolbar color="pink" dark>



        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Check Weather</v-toolbar-title>


        <v-spacer></v-spacer>

      </v-toolbar>


      <v-container fluid grid-list-lg>

        <vue-select :options="options" class="mb-4" @input="run($event)"></vue-select>
        <single-city v-if="minTemp" />
 
      </v-container>

    </div>
  </div>
</template>

<script>
  import SingleCity from '@/components/SingleCity.vue'
  import Select2 from '@/components/Select2.vue'


  export default {
    name: 'singlecity',
    components: {
      'single-city': SingleCity,
      'vue-select': Select2
    },
    data() {
      return {
        minTemp: null,
        maxTemp: null,
        options: [{
            label: "Warszawa",
            value: 'warsaw'
          },
          {
            label: "Manchester",
            value: 'manchester'
          },
          {
            label: "Berlin",
            value: 'berlin'
          }
        ]
      }
    },
    methods: {
      run(data) {
        let self = this;
        async function getWeather() {
          try {
            const woeid2 = await axios.get(
              `${'https://cors-anywhere.herokuapp.com/'}https://www.metaweather.com/api/location/search/?query=${data.value}`
            );
            var response = await axios.get(
              `${'https://cors-anywhere.herokuapp.com/'}https://www.metaweather.com/api/location/${woeid2.data[0].woeid}/2018/8/13/`
            )
          } catch (error) {
            console.error(error);
          }
            self.minTemp = response.data[0].min_temp;
            self.maxTemp = response.data[0].max_temp;
            console.log(self.minTemp, self.maxTemp)
        }

        getWeather();

      },
      created() {

      }
    }
  }
</script>

<style lang="scss">
  .weatherapp__city {
    min-width: 120px;
  }
</style>
