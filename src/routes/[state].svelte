<script context='module'>
    export async function preload(page) {
        console.log({page});
        return { state: page.params['state'] };
    }
</script>

<script>
    import CovidChart from '../components/CovidChart.svelte';
	import CovidStats from '../components/CovidStats.svelte';
    import TableContainer from '../components/TableContainer.svelte';
    
    export let state;
    
</script>

<h3>{state} - display chart and stats based on the state</h3>
<CovidStats/>
<CovidChart/>