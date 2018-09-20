<template>


    <v-select :options="options" v-model="selected" :placeholder="placeholder">
		
    </v-select>


</template>

<script>
    import $ from 'jquery';
    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                selected: null,
                placeholder: 'Choose one city'
            }
        },
        methods: {
            ...mapActions([
                'fetchWeatherData'
            ])
        },
        props: ['options', 'value'],
        watch: {
            selected() {
               if(this.selected)
                  this.fetchWeatherData(this.selected.value);  
            }
        }
    }
</script>

<style>
.v-select .open-indicator {
    margin-top: -5px;
}
</style>
