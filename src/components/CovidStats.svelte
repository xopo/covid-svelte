<script>
    export let cases, negative, death, recovered, hospitalized, ventilator, icu, tested, updated;
</script>
<style>
    .columns {
        border: solid 1px gray;
    }
</style>
<div class="section">
    <div class="container">
        <div class="columns">
            <h2 class="is-3 column">Cases: {cases}</h2>
            <h2 class="is-3 column">Deaths: {death}</h2>
            <h2 class="is-3 column">Recovered: {recovered}</h2>
            <h2 class="is-3 column">Negative: {negative}</h2>
        </div>
    </div>
</div>


<div class="section">
    <div class="container">
        <div class="columns">
            <h2 class="is-3 column">Tested: {tested}</h2>
            <h2 class="is-3 column">Hospitalized: {hospitalized}</h2>
            <h2 class="is-3 column">Total ICU: {icu}</h2>
            <h2 class="is-3 column">Total Ventilator: {ventilator}</h2>
        </div>
    </div>
</div>