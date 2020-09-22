import { setup } from 'axios-cache-adapter';
import parser from './parsers';

const axios = setup({
    baseURL: 'https://api.covidtracking.com/api/v1/',
    cache: { maxAge: 5 * 1000 }
});

const placeholder = {
    us: 'us',
    states: 'states'
};

const currentUrl = `#placeholder#/current.json`;
const dailyUrl = `#placeholder#/#state#/daily.json`;

const getUrl = (url, placeholder) => url.replace('#placeholder#', placeholder);

const api_url = {
    us: getUrl(currentUrl, placeholder.us),
    states: getUrl(currentUrl, placeholder.states),
    historyUs: getUrl(dailyUrl, placeholder.us),
    historyStates: getUrl(dailyUrl, placeholder.states)
}

export async function getStatesData(apiUrl=api_url.states) {
    const { data } = await axios.get(apiUrl);

    return parser.mapStatesByState(data);
}

export default async function getStats(apiUrl=api_url.us) {
    const {data: [ result ]} = await axios.get(apiUrl);

    return parser.parseStats(result);
}

export async function getHistorycData(apiUrl=api_url.historyUs) {
    const updatedUrl = apiUrl.replace('#state#', '');
    const { data } = await axios.get(updatedUrl);
    
    return parser.historicUs(data);
}

export async function getStateHistoricData(state, apiUrl=api_url.historyStates) {
    const updatedUrl = apiUrl.replace('#state#', state);
    const { data } = await axios.get(updatedUrl);
    
    return parser.historicUs(data);
}



async function getStatesStatistics(apiUrl=api_url.states) {
    return await axios.get(apiUrl);
}

export async function getStatesStats(state) {
    const { data } = await getStatesStatistics();
    const stateStat = data.find(s => s.state === state.abbreviation);

    return parser.parseStats(stateStat);
}