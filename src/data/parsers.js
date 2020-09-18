import format from './format.js';
import moment from 'moment';

function usStats(data) {
    const [result ] = data;

    return {
        cases: format.number(result.positive),
        negative: format.number(result.negative),
        death: format.number(result.death),
        recovered: format.number(result.recovered), 
        hospitalized: format.number(result.hospitalized),
        ventilator: format.number(result.onVentilatorCurrently),
        icu: format.number(result.inIcuCumulative),
        tested: format.number(result.totalTestResults),
        updated: moment(result.lastModified).format('LLLL')
    }
}

export default {
    usStats
}