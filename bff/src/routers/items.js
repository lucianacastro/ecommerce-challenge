const { Router } = require('express');
const itemsRouter = Router();

const got = require('got');

if (!process.env.MELI_API_URL) {
    throw new Error('MELI_API_URL is not define');
}

const mapCategories = filters => {
    try {
        return filters
            .find(item => item.id === 'category')
            .values[0].path_from_root
            .map(category => category.name);
    } catch (error) {
        console.error(error);
        return [];
    }
}
    

const mapResultToItem = (item) => ({
    'id': item.id,
    'title': item.title,
    'price': {
        'currency': item.currency_id,
        'amount': item.price,
        'decimals': NaN, // ver qué dato debe ir acá
    },
    'picture': item.pictures[0].secure_url, // ver si conviene ir a expandir y traer imagen mas grande
    'condition': item.condition,
    'free_shipping': item.shipping.free_shipping,
});     

const mapSearchResultsToResponse = (searchResults) => {
    const { results, filters } = searchResults;
    console.log({results, filters})
    return {
        'author': { // https://api.mercadolibre.com/users/{sellerId} ????
            'name': '',
            'lastName': '',
        },
        'categories': mapCategories(filters),
        'items': results.map(item => mapResultToItem(item)),
    }
};

const getSearchResultsFromAPI = async (searchText) => {
    const encodedQuery = encodeURI(searchText);
    const { body } = await got(`${process.env.MELI_API_URL}/sites/MLA/search?q=${searchText}&limit=4`, {json:true});
    return body; // devuelve un objeto con results y filters
};

const getItemFromAPI = async (itemId) => {
    const { body } = await got(`${process.env.MELI_API_URL}/items/${itemId}`, {json:true});
    return body;
};

const expandSearchResultsFromAPI = async (searchResults) => {
    const { results } = searchResults;
    const itemsPromises = results.map(result => getItemFromAPI(result.id));
    const expandedResults = await Promise.all(itemsPromises)
        .then(items => results.map((result, idx) => ({
            ...result, 
            pictures: items[idx].pictures,
        })));
    return { ...searchResults, results: expandedResults };
};

itemsRouter.get('/items', async (req, res) => {
    try {
        //const searchResults = await getSearchResultsFromAPI(req.query.q);
        const searchResults = await expandSearchResultsFromAPI( await getSearchResultsFromAPI(req.query.q));
        res.send(mapSearchResultsToResponse(searchResults));
    } catch (error) {
        console.error(error);
        res.statusCode(500).send({error: 'Internal server error'});
    }
});

itemsRouter.get('/items/:itemId', function(req, res) {
    res.send({itemId: req.params.itemId})
});

module.exports = itemsRouter;