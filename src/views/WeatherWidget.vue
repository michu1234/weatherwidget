<template>
  <div class="weatherwidget">
    <SingleCity/>
  </div>
</template>

<script>
import SingleCity from '@/components/SingleCity.vue'

export default {
  name: 'singlecity',
  components: {
    SingleCity
  }
}
</script>
