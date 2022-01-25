<template>
    <div>
        <h1>차트 샘플</h1>
        <br><br>
        <v-chart class="chart" :option="option" />
    </div>
</template>

<script>
export default {
    data () {
        return {
            option: {
                title: {
                    text: '인바디 통계'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['몸무게','체지방']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                    saveAsImage: {}
                    }
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
                    name: '몸무게',
                    type: 'line',
                    stack: 'Total',
                    data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                    name: '체지방',
                    type: 'line',
                    stack: 'Total',
                    data: [120, 132, 101, 134, 90, 230, 210]
                    }
                ]
            },
        }
    }
}
</script>

<style >
.chart {
    height: 400px;
}
</style>