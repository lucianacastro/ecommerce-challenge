import fetch from 'isomorphic-unfetch';

const getSearch = async (query) => {
    const response = await fetch(`${process.env.BFF_API_URL}/api/items?q=${query}`);
    return await response.json();
}

module.exports = { getSearch };