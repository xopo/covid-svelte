import format from './format.js';
import moment from 'moment';
import states from './stateNames';

const parseStats = ({
        death, 
        inIcuCumulative, 
        lastModified, 
        hospitalized, 
        onVentilatorCurrently, 
        negative, 
        positive, 
        recovered, 
        totalTestResults
    }) => ({
    cases: format.number(positive),
    negative: format.number(negative),
    death: format.number(death),
    recovered: format.number(recovered), 
    hospitalized: format.number(hospitalized),
    ventilator: format.number(onVentilatorCurrently),
    icu: format.number(inIcuCumulative),
    tested: format.number(totalTestResults),
    updated: moment(lastModified).format('LLLL')
});

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

function mapStatesByState(data) {
    const acc = [];
    data.forEach(entry => {
        const obj = {
            name: states.find(state => state.abbreviation === entry.state).name,
            state: format.number(entry.state),
            cases: format.number(entry.positive),
            deaths: format.number(entry.death),
            totalTested: format.number(entry.totalTestResults)
        }

        acc.push(obj);
    })
    return acc;
}

export default {
    historicUs,
    mapStatesByState,
    parseStats,
    parseHistoricData
}