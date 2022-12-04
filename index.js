import Vue from 'vue';
import Chart from './Chart';
import * as d3 from 'd3';
<>
  <script src="https://d3js.org/d3.v7.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/d3-org-chart@2"></script>
  <script src="https://cdn.jsdelivr.net/npm/d3-flextree@2.1.2/build/d3-flextree.js"></script>
</>;
new Vue({
  el: '#app',
  template: ` <div
  class="chart-container"
></div>`,
  data() {
    return {
      data: null,
    };
  },
  components: {
    Chart,
  },
  created() {
    var chart;
    d3.csv('./org.csv').then((data) => {
      chart = new d3.OrgChart()
        .container('.chart-container')
        .data(data)
        .render();
    });
  },
});
