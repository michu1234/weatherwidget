<template>


    <v-select :options="options" v-model="selected" :placeholder="placeholder">
		
    </v-select>


</template>

<script>
    import { mapActions, mapMutations } from 'vuex'

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
            ]),
            ...mapMutations([
                'runSpinner'
            ])
        },
        props: ['options', 'value'],
        watch: {
            selected() {
               if(this.selected !== null){
                                     this.fetchWeatherData(this.selected.value);
                this.runSpinner();
                  console.log(this.selected);
               }


            }
        }
    }
</script>

<style>
.v-select .open-indicator {
    margin-top: -5px;
}
</style>
