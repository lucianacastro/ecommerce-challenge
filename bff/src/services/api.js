const got = require('got');

if (!process.env.MELI_API_URL) {
    throw new Error('MELI_API_URL is not defined');
}

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

const expandSearchResults = async (searchResults) => {
    const { results } = searchResults;
    const itemsPromises = results.map(result => getItem(result.id));
    const expandedResults = await Promise.all(itemsPromises)
        .then(items => results.map((result, idx) => ({
            ...result, 
            pictures: items[idx].pictures,
        })));
    return { ...searchResults, results: expandedResults };
};

const expandItem = async (item) => {
    const itemDescription = await getItemDescription(item.id);
    return { ...item, description: itemDescription.plain_text }
}

module.exports = { getSearchResults, getItem, expandSearchResults, expandItem };