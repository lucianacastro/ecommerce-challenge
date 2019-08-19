const got = require('got');

const getSearchResults = async (searchText) => {
    const encodedQuery = encodeURI(searchText);
    const { body } = await got(`${process.env.MELI_API_URL}/sites/MLA/search?q=${searchText}&limit=4`, {json:true});
    return body; // devuelve un objeto con results y filters
};

const getItem = async (itemId) => {
    const { body } = await got(`${process.env.MELI_API_URL}/items/${itemId}`, {json:true});
    return body;
};

const getItemDescription = async (itemId) => {
    const { body } = await got(`${process.env.MELI_API_URL}/items/${itemId}/description`, {json:true});
    return body;
};

module.exports = { getSearchResults, getItem, getItemDescription };