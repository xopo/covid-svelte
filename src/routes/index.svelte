<script context="module">
	import getStats, { getHistorycData, getStatesData } from '../data/requests.js';
	export async function preload() {
		try {
			const data = await getStats();
			const historicData = await getHistorycData();
			const statesData = await getStatesData();
			return { 
				data, 
				historicData,
				statesData
			}
		} catch(er) {
			console.log({er})
		}
	} 
</script>

<script> 
	export let data, historicData, statesData;
	
	import CovidChart from '../components/CovidChart.svelte';
	import CovidStats from '../components/CovidStats.svelte';
	import TableContainer from '../components/TableContainer.svelte';
import About from './about.svelte';
</script>

<svelte:head>
	<title>About Covid 19 Tracker US</title>
</svelte:head>

<div class="section header">
	<div class="container">
		<h1>Covid 19 - US</h1>
	</div>
</div>

<CovidStats {...data}/>
<CovidChart {historicData} title='Some title'/>
<TableContainer {statesData}/>