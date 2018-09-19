import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    ],
    chartData: [ {'label': 'Minimum', 'value': 345},
{'label': 'Minimum2', 'value': 345}]
  },
  mutations: {
    addCityWeather(state, payload) {
      state.chartData.push(...payload);
      console.log(state.chartData)
    }
  },
  actions: {
    async fetchWeatherData({commit},payload) {

      // console.log('data:' + payload);
        try {
          const woeid2 = await axios.get(
            `${'https://cors-anywhere.herokuapp.com/'}https://www.metaweather.com/api/location/search/?query=warsaw`
          );
          var response = await axios.get(
            `${'https://cors-anywhere.herokuapp.com/'}https://www.metaweather.com/api/location/${woeid2.data[0].woeid}/2018/8/13/`
          )
          var minTemp = response.data[0].min_temp;
          var maxTemp = response.data[0].max_temp;

          console.log(minTemp, maxTemp);

          commit('addCityWeather', [
            {'label': 'Minimum', 'value': parseInt(minTemp)},
            {'label': 'Maximum', 'value': parseInt(maxTemp)},
          ])
        } catch (error) {
          console.error(error);
        }


        // context.commit('addCityWeather', [
        // { "type": "Lowest", "sold": minTemp },
        // { "type": "Highest", "sold": maxTemp }
        // ])

    }
  }
})
