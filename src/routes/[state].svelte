<script context='module'>
    import stateNames from '../data/stateNames.js';
    import { getStatesStats, getStateHistoricData } from '../data/requests';
 
    export async function preload({params: { state }}) {
        const targetState = stateNames.find(item => item.name === state || item.abbreviation === state);
        if (!targetState) {
            console.log({state, targetState})
            this.error(404, 'State not found');
            return;
        }

        const data = await getStatesStats(targetState)
        const historicData = await getStateHistoricData(targetState.abbreviation);
         
        return { 
            data, 
            historicData, 
            state: targetState, 
        };
    }
</script>

<script>
    import CovidChart from '../components/CovidChart.svelte';
	import CovidStats from '../components/CovidStats.svelte';
    import TableContainer from '../components/TableContainer.svelte';
    
    export let state;
    export let data;
    export let historicData;
</script>

<svelte:head>
	<title>About Covid 19 Tracker US</title>
</svelte:head>

<div class="section header">
	<div class="container">
		<h1>Covid 19 - US {state.name} State</h1>
	</div>
</div>



<h3>{state.name} - display chart and stats based on the state</h3>
<CovidStats {...data}/>
<CovidChart {historicData} title={`${state} - chart`}/>