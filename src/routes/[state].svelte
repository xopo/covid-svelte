<script context='module'>
    export async function preload(page) {
        console.log({page});
        return { state: page.params['state'] };
    }
</script>
<svelte:head>
	<title>About Covid 19 Tracker US</title>
</svelte:head>

<div class="section header">
	<div class="container">
		<h1>Covid 19 - US State</h1>
	</div>
</div>

<script>
    import CovidChart from '../components/CovidChart.svelte';
	import CovidStats from '../components/CovidStats.svelte';
    import TableContainer from '../components/TableContainer.svelte';
    
    export let state;
    
</script>

<h3>{state} - display chart and stats based on the state</h3>
<CovidStats/>
<CovidChart/>