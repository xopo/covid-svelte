<script>
    import Table from './Table.svelte';
    import TableFilter from './TableFilter.svelte';
    import { localeString2Number } from '../data/helper';

    export let statesData;
    let filterBy = '';
    let sortBy = 'name';
    
    const filerStates = ({name, state}) => name.toLowerCase().indexOf(filterBy.toLowerCase()) > -1 || 
                                        state.toLowerCase().indexOf(filterBy.toLowerCase()) > -1;

    const sortSringsAndNumbers = (prev, next) => {
        const [n1, n2] = [prev[sortBy], next[sortBy]];
        return sortBy === 'name' ? 
            n1 > n2 :
            localeString2Number(n1) - localeString2Number(n2)
    }

    const filterAndSort = (data, filterBy, sortBy) => {
        const filtredData = filterBy.length ? data.filter(filerStates) : data;
        return sortBy === 'name' ? filtredData : filtredData.slice().sort(sortSringsAndNumbers)
    }

    $: entries = filterAndSort(statesData, filterBy, sortBy);
    $: console.log({filterBy, sortBy});
</script>

<TableFilter bind:filterBy bind:sortBy/>
<Table {entries}/>
