<script>
    import Table from './Table.svelte';
    import TableFilter from './TableFilter.svelte';

    export let statesData;
    export let filterBy = null;
    const entries = filterBy 
        ? statesData.filter(state => state.name === filterBy)
        : statesData; 



    // console.log({statesData})
</script>

<TableFilter />
<Table {entries}/>
