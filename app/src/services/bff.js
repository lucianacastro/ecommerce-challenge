import fetch from 'isomorphic-unfetch';
const BFF_API_URL = process.browser ?
    process.env.FE_BFF_API_URL :
    process.env.BE_BFF_API_URL ;

const getSearch = async (query) => {
    const response = await fetch(`${BFF_API_URL}/api/items?q=${query}`);
    return await response.json();
}

const getItem = async (itemId) => {
    const response = await fetch(`${BFF_API_URL}/api/items/${itemId}`);
    return await response.json();
}

module.exports = { getSearch, getItem };