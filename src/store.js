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
    airPressure: '',
    weatherIcon: '',
    spinner: false,
    showWeather: false
  },
  mutations: {
    addChartData(state, payload) {
      state.showWeather = true;
      state.chartData = [...payload];
    },
    addWeatherData(state, payload) {
      state.windSpeed = payload[0].toFixed();
      state.humidity = payload[1].toFixed();
      state.airPressure = payload[2].toFixed();
    },
    runSpinner(state) {
      state.spinner =! state.spinner;
    },
    addWeatherIcon(state, payload) {
      switch (payload) {
        case "sn":
          state.weatherIcon = 'https://image.ibb.co/iQ8JsK/sn.png'
          break;
        case "sl":
          state.weatherIcon = 'https://image.ibb.co/kL6Sme/sl.png'
          break;
        case "h":
          state.weatherIcon = 'https://image.ibb.co/fTaWCK/h.png'
          break;
        case "t":
          state.weatherIcon = 'https://image.ibb.co/nmXdsK/t.png'
          break;
        case "hr":
          state.weatherIcon = 'https://image.ibb.co/cQowez/hr.png'
          break;
        case "lr":
          state.weatherIcon = 'https://image.ibb.co/mRTwez/lr.png'
          break;
        case "s":
          state.weatherIcon = 'https://image.ibb.co/bQO7me/s.png'
          break;
        case "hc":
          state.weatherIcon = 'https://image.ibb.co/eCyUzz/hc.png'
          break;
        case "lc":
          state.weatherIcon = 'https://image.ibb.co/dg09zz/lc.png';
          break;
        case "c":
          state.weatherIcon = 'https://image.ibb.co/bMS06e/c.png'
          break;

        default:
          break;
      }
    }
  },
  actions: {
    async fetchWeatherData({
      commit
    }, payload) {
      try {
        const woeid2 = await axios.get(
          `${'https://cors-anywhere.herokuapp.com/'}https://www.metaweather.com/api/location/search/?query=${payload}`
        );
        var response = await axios.get(
          `${'https://cors-anywhere.herokuapp.com/'}https://www.metaweather.com/api/location/${woeid2.data[0].woeid}/2018/8/13/`
        )
        var minTemp = response.data[0].min_temp;
        var maxTemp = response.data[0].max_temp;
        var windSpeed = response.data[0].wind_speed;
        var humidity = response.data[0].humidity;
        var airPressure = response.data[0].air_pressure;
        var weatherSymbol = response.data[0].weather_state_abbr;

        commit('addChartData', [{
            "type": "Minimum",
            "sold": minTemp
          },
          {
            "type": "Maximum",
            "sold": maxTemp
          }
        ])

        commit('addWeatherData', [windSpeed, humidity, airPressure]);
        commit('addWeatherIcon', weatherSymbol);
        commit('runSpinner');

        
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
