<template>
  <div class="singlecity">
    <div id="e3" style="max-width: 400px; margin: 20px auto;" class="grey lighten-3">
      <v-toolbar color="amber darken-1" dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Check Weather</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-container fluid grid-list-lg>
        <vue-select :options="options" class="mb-4"></vue-select>
        <div v-show="spinner" class="text-xs-center mb-4">            <v-progress-circular
      indeterminate
      color="amber"
    ></v-progress-circular></div>
  <transition name="fade">
        <single-city v-show="showWeather"/>
          </transition>
      </v-container>
    </div>
  </div>
</template>

<script>
  import SingleCity from '@/components/SingleCity.vue';
  import Select2 from '@/components/Select2.vue';
  import { mapState } from 'vuex';

  export default {
    name: 'singlecity',
    components: {
      'single-city': SingleCity,
      'vue-select': Select2
    },
    computed: {
      ...mapState([
        'options',
        'windSpeed',
        'spinner',
        'showWeather'
      ])
    }
  }
</script>

<style lang="scss">
  .weatherapp__city {
    min-width: 120px;
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
