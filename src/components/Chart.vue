<template>
 <div id="chartdiv" style="width: 100%; height: 400px;"></div>
</template>

<script>
import { mapState } from 'vuex'

export default {
computed: {
  ...mapState([
    'chartData'
  ])
},
mounted() {

 let chart = AmCharts.makeChart("chartdiv",
      {
        "type": "serial",
        "categoryField": "type",
        "chartCursor": {},
        "graphs": [
          {
            "type": "column",
            "title": "Pizza types",
            "valueField": "sold",
            "fillAlphas": 0.8
          }
        ],

        "dataProvider": [
             this.chartData
        ],
        "allLabels": [{
    "text": "Temperature",
    "x": "!20",
    "y": "!60",
    "width": "50%",
    "size": 15,
    "bold": true,
    "align": "right"
  },{
    "text": "Celsius degree",
    "rotation": 270,
    "x": "10",
    "y": "0",
    "width": "50%",
    "size": 15,
    "bold": true,
    "align": "right"
  }],
      }
    );


}
}
</script>

<style>

</style>
