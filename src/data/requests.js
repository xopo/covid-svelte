import axios from 'axios';
import parser from './parsers';

const placeholder = {
    us: 'us',
    states: 'states'
};
const apiBase = 'https://api.covidtracking.com/api/v1/'; 
const url = `${apiBase}#placeholder#/current.json`;
const getUrl = (placeholder) => url.replace('#placeholder#', placeholder);
const api_url = {
    us: getUrl(placeholder.us),
    states: getUrl(placeholder.states),
    historyUrl: `${apiBase}us/daily.json`
}

export default async function parseStats(apiUrl=api_url.us) {
    const {data: [ result ]} = await axios.get(apiUrl);

    return parser.parseStats(result);
}

export async function getHistorycData(apiUrl=api_url.historyUrl) {
    const result = await axios.get(apiUrl);
    
    return parser.historicUs(result.data);
}



async function getStatesStatistics(apiUrl=api_url.states) {
    return await axios.get(apiUrl);
}

export async function getStatesStats(state) {
    const response = await getStatesStatistics();
    const stateStat = response.data.find(s => s.state === state.abbreviation);

    return parser.parseStats(stateStat);
}