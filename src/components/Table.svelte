<script>
    export let entries;
</script>

<div class="section">
    <div class="container">
        <table class='table is-bordered is-striped'>
            <thead>
                <tr>
                    <th>State</th>
                    <th>Cases</th>
                    <th>Deaths</th>
                    <th>Total Tested</th>
                </tr>
            </thead>
            <tbody>
                {#each entries as {name, state, cases, deaths, totalTested}}
                    <tr>
                        <td>
                            <a href={`/${state}`}>{name}</a>
                        </td>
                        <td>{cases}</td>
                        <td>{deaths}</td>
                        <td>{totalTested}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>

<style>
    table {
        width: 100%
    }
    .section {
        padding: .5rem 1.5rem;
    }
</style>