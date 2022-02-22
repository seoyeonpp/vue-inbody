<template>
  <div class="inner-wrap">
    <h2 class="page-tit">인바디검사 요약</h2>
    <ul class="grid-col3">
      <li>
        <button
          :class="{active: isWeight}"
          @click="changeIndex(0)"
        >
          <span class="tit">체중 kg</span>
          <strong class="data">20<span>.0</span></strong>
          <strong class="flag">표준이상</strong>
        </button>
      </li>
      <li>
        <button
          :class="{active: isMuscle}"
          @click="changeIndex(1)"
        >
          <span class="tit">골격근량 kg</span>
          <strong class="data">20<span>.0</span></strong>
          <strong class="flag">표준이상</strong>
        </button>
      </li>
      <li>
        <button
          :class="{active: isFat}"
          @click="changeIndex(2)"
        >
          <span class="tit">체지방률 %</span>
          <strong class="data">20<span>.0</span></strong>
          <strong class="flag">표준이상</strong>
        </button>
      </li>
    </ul>
    <div class="box-graph">
      <v-chart
        class="chart"
        v-if="isWeight"
        :option="optWeight" />
      <v-chart
          class="chart"
          v-if="isMuscle"
          :option="optMuscle" />
      <v-chart
          class="chart"
          v-if="isFat"
          :option="optFat" />
    </div>
    <div class="box-btn">
      <router-link to="/inbodydata" class="btn-round">+ 검사기록</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isWeight: true,
    isMuscle: false,
    isFat: false,
    optWeight: {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1/25', '1/26', '1/27', '1/28', '1/29', '1/30', '1/31']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            name: '체중',
            type: 'line',
            stack: 'Total',
            data: [50, 132, 101, 134, 90, 230, 210]
            }
        ]
    },
    optMuscle: {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1/25', '1/26', '1/27', '1/28', '1/29', '1/30', '1/31']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            name: '골격근량',
            type: 'line',
            stack: 'Total',
            data: [35, 30, 20, 10, 5, 80, 50]
            }
        ]
    },
    optFat: {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1/25', '1/26', '1/27', '1/28', '1/29', '1/30', '1/31']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            name: '체지방',
            type: 'line',
            stack: 'Total',
            data: [20, 10, 30, 50, 10, 10, 5]
            }
        ]
    },
  }),
  methods: {
    changeIndex(index) {
      switch(index) {
        case 0:
          this.isWeight = true;
          this.isMuscle = false;
          this.isFat = false;
          break;
        case 1:
          this.isWeight = false;
          this.isMuscle = true;
          this.isFat = false;
          break;
        case 2:
          this.isWeight = false;
          this.isMuscle = false;
          this.isFat = true;
          break;
      }
    },
  }
}
</script>

<style>

</style>