import axios from 'axios';
import parser from './parsers';

const url = 'https://api.covidtracking.com/v1/#placeholder#/current.json'
const placeholder = {
    us: 'us',
    states: 'states'
};

const getUrl = (placeholder) => url.replace('#placeholder#', placeholder);

const api_url = {
    us: getUrl(placeholder.us),
    states: getUrl(placeholder.states)
}


export default async function usStats(apiUrl=api_url.us) {
    console.log({apiUrl});

    const {data: [ result ]} = await axios.get(apiUrl);
    return parser.usStats(result);
}



async function getStatesStatistics(apiUrl=api_url.states) {
    console.log({apiUrl});
    return await axios.get(apiUrl);
}

export async function getStatesStats(state) {
    console.log({state})
    
    const response = await getStatesStatistics();
    const stateStat = response.data.find(s => s.state === state.abbreviation);

    console.log({stateStat})
    return parser.usStats(stateStat);
}