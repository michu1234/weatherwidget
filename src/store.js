import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
    chartData: [],
    windSpeed: '',
    humidity: '',
    airPressure: ''
  },
  mutations: {
    addChartData(state, payload) {
      state.chartData = [...payload];
    },
    addWeatherData(state, payload) {
      state.windSpeed = payload[0].toFixed();
      state.humidity = payload[1].toFixed();
      state.airPressure = payload[2].toFixed();
    }
  },
  actions: {
    async fetchWeatherData({
      commit
    }, payload) {
      try {
        const woeid2 = await axios.get(
          `${'https://cors-anywhere.herokuapp.com/'}https://www.metaweather.com/api/location/search/?query=warsaw`
        );
        var response = await axios.get(
          `${'https://cors-anywhere.herokuapp.com/'}https://www.metaweather.com/api/location/${woeid2.data[0].woeid}/2018/8/13/`
        )
        var minTemp = response.data[0].min_temp;
        var maxTemp = response.data[0].max_temp;
        var windSpeed = response.data[0].wind_speed;
        var humidity = response.data[0].humidity;
        var airPressure = response.data[0].air_pressure;

        commit('addChartData', [{
            "type": "Minimum",
            "sold": minTemp
          },
          {
            "type": "Maximum",
            "sold": maxTemp
          }
        ])

        commit('addWeatherData', [windSpeed, humidity, airPressure])

      } catch (error) {
        /* eslint-disable-next-line no-console */
        console.error(error);
      }


      // context.commit('addCityWeather', [
      // { "type": "Lowest", "sold": minTemp },
      // { "type": "Highest", "sold": maxTemp }
      // ])

    }
  }
})
