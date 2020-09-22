<script>
import { defaultCipherList } from "constants";
import { createSecureServer } from "http2";
import stateNames from "../data/stateNames";

    export let entries;
</script>
<table>
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