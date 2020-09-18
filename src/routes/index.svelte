<script>
	import CovidChart from '../components/CovidChart.svelte';
	import CovidStats from '../components/CovidStats.svelte';
	import TableContainer from '../components/TableContainer.svelte';
</script>

<svelte:head>
	<title>About Covid 19 Tracker US</title>
</svelte:head>

<div class="section header">
	<div class="container">
		<h1>Covid 19 - US</h1>
	</div>
</div>

<CovidStats/>
<CovidChart/>
<TableContainer/>