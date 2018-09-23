export let widgetMutations = {
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
        state.spinner = !state.spinner;
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
}