<script>
	import CovidChart from '../components/CovidChart.svelte';
	import CovidStats from '../components/CovidStats.svelte';
	import TableContainer from '../components/TableContainer.svelte';
</script>

<svelte:head>
	<title>Covid project</title>
</svelte:head>

<CovidStats/>
<CovidChart/>
<TableContainer/>