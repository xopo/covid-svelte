import format from './format.js';
import moment from 'moment';

function parseStats(result) {
    
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

const historicUs = historicData => ([
    {
        label: 'Cases',
        key: 'positive',
        color: 'rgb(100, 0, 200)'
    },
    {
        label: 'Recovered',
        key: 'recovered',
        color: 'rgb(100, 100, 200)'
    },
    {
        label: 'Total Tested',
        key: 'totalTestResults',
        color: 'rgb(10, 30, 100)'
    },
    {
        label: 'Hospitalized',
        key: 'hospitalizedCurrently',
        color: 'rgb(20, 100, 230)'
    },
    {
        label: 'Death',
        key: 'death',
        color: 'rgb(255, 99, 133)'
    },
    {
        label: 'Negative',
        key: 'negative',
        color: 'lime'
    }
].reduce((prev, {key, label, color}, index)=> {
    // remove some data 2/3
    if (historicData.filter(h => h[key] !== null).length > 4) {
        prev.push(parseHistoricData(historicData, key, label, color))
    }
    console.log({key, label, prev})
    return prev;
}, []));

function parseHistoricData(historyItems, key, label, borderColor) {
    const data = historyItems.map(item => ({
        x: moment(item.date, 'YYYYMMDD'),
        y: item[key] || 0
    }));
    
    return ({
        label,
        data,
        fill: false,
        borderColor
    });
}

export default {
    parseStats,
    parseHistoricData,
    historicUs
}