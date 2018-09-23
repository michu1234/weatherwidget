import api from '../services/api'

export let widgetActions = {
    async fetchWeatherData({
        commit
    }, payload) {
        try {
            api.getWoeid(payload).then((woeid) => api.getWeather(woeid)).then(function (response) {
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
            })
        } catch (error) {
            /* eslint-disable-next-line no-console */
            console.error(error);
        }
    }
}