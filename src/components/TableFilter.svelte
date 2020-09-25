<style>
    input, .select {
        width: 100%
    }
    .column {
        padding-left: 0;
    }
</style>

<script>
    export let sortBy;
    export let filterBy = 'maka';
</script>

<div class="section">
    <div class="container">
        <div class="columns">
            <div class="column is-6">
                <input class='input' bind:value={filterBy} type="text" placeholder="Filter States">
            </div>
            <div class="column is-6">
                <div class="select">
                    <select class='select' bind:value={sortBy}>
                        <option value=""  disabled>Chose a sort option</option>
                        <option value='name'>By State Name</option>
                        <option value="cases">Cases</option>
                        <option value="deaths">Death</option>
                        <option value="totalTested">Tested</option>
                        <option value="negative" disabled>Negative</option>
                        <option value=""></option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</div>