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
        <single-city/>
 
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
    data() {
      return {

      }
    },
    computed: {
      ...mapState([
        'options'
      ])
    }
  }
</script>

<style lang="scss">
  .weatherapp__city {
    min-width: 120px;
  }
</style>
