<script context='module'>
    import stateNames from '../data/stateNames.js';

    export async function preload({params: { state }}) {
        const targetState = stateNames.find(item => item.name === state || item.abbreviation === state);
        if (!targetState) {
            this.error(404, 'State not found');
            return;
        }
         
        return { state: targetState };
    }
</script>

<script>
    import CovidChart from '../components/CovidChart.svelte';
	import CovidStats from '../components/CovidStats.svelte';
    import TableContainer from '../components/TableContainer.svelte';
    
    export let state;
    
</script>

<svelte:head>
	<title>About Covid 19 Tracker US</title>
</svelte:head>

<div class="section header">
	<div class="container">
		<h1>Covid 19 - US State</h1>
	</div>
</div>



<h3>{state.name} - display chart and stats based on the state</h3>
<CovidStats/>
<CovidChart/>