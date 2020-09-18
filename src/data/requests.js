import axios from 'axios';
import parser from './parsers';

const url = 'https://api.covidtracking.com/v1/us/current.json'

export default async function usStats(apiUrl=url) {
    const response = await axios.get(apiUrl);
    return parser.usStats(response.data);
}