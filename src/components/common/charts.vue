<template>
  <div ref="chartBox" style="width: 100%; height: calc(100% - 0px);"></div>
</template>

<script>
import charts from "../../assets/js/charts.js"

export default {
  name: "chart",
  data() {
    return {};
  },
  props: ['mode'],
  methods: {
    handleChart(data) {
      charts[data.type](this.$refs.chartBox, data);
    }
  }
};
</script>

<style scoped>
</style>
