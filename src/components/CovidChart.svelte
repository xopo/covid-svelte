<script>
    import { onMount, onDestroy } from 'svelte';
    import Chart from 'chart.js';

    export let historicData;
    export let title;

    let hideChart = false;
    let chartElement;
    let chart;

    function createChart() {
        try {
            chart = new Chart(chartElement.getContext('2d'), {
                type: 'line',
                data: {
                    datasets: historicData
                }, 
                options: {
                    responsive: true,
                    tooltips: {
                        callbacks:  {
                            label : function({ datasetIndex, yLabel }, { datasets }) {
                                return `${datasets[datasetIndex].label}: ${yLabel.toLocaleString()}`;
                            }
                        }
                    },
                
                    title: {
                        display: true,
                        text: title
                    },
                    scales: {
                        xAxes: [
                            {
                                type: 'time', 
                                time: {
                                    parser: 'M/D/YY',
                                    tooltipFormat: 'll'
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Date'
                                }
                            }
                        ],
                        yAxes: [
                            {
                                scaleLabel: {
                                    display: true
                                },
                                ticks: {
                                    beginAtZero: true,
                                    userCallbck: function(value, index, values) {
                                        return value.toLocalString();
                                    }
                                }
                            }
                        ]
                    }
                }
            });
        } catch(er) {
            console.log({er})
        }
    }

    onMount(()=>{
        if (historicData /*&& document.body.clientWidth > 680*/) {
            createChart();
            return;
        }
        hideChart = true;
    });
    
    onDestroy(()=>{
        if (chart) {
            chart.destroy();
        }
    });
</script> 
{#if !hideChart}
<div class="section">
    <div class="container">
        <canvas bind:this={chartElement}></canvas>
    </div>
</div>
{/if}