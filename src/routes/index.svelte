<script context="module">
	import {getStats, getHistorycData, getStatesData } from '../data/requests.js';
	export async function preload() {
		try {
			const todayData = await getStats();
			const historicData = await getHistorycData();
			const statesData = await getStatesData();
			
			return { 
				todayData, 
				historicData,
				statesData
			}
		} catch(er) {
			console.log({er})
		}
	} 
</script>

<script> 
	export let todayData;
	export let historicData;
	export let statesData;
	
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

<CovidStats {...todayData}/>
<CovidChart {historicData} title='Some title'/>
<TableContainer {statesData}/>