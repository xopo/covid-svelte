<script context="module">
	import parseStats, { getHistorycData } from '../data/requests.js';
	export async function preload() {
		try {
			const data = await parseStats();
			const historicData = await getHistorycData();
			return { data, historicData }
		} catch(er) {
			console.log({er})
		}
	} 
</script>

<script> 
	export let data;
	export let historicData;
	console.log({historicData})
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
<CovidChart {historicData}/>
<TableContainer/>