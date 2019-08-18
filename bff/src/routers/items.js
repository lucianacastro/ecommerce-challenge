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
    

const mapItem = (item) => ({
    'id': item.id,
    'title': item.title,
    'price': {
        'currency': item.currency_id,
        'amount': item.price,
        'decimals': NaN, // ver qué dato debe ir acá
    },
    'picture': item.thumbnail, // ver si conviene ir a expandir y traer imagen mas grande
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
        'items': results.map(item => mapItem(item)),
    }
};

const getSearchResultsFromAPI = async (searchText) => {
    const encodedQuery = encodeURI(searchText);
    const { body } = await got(`${process.env.MELI_API_URL}/sites/MLA/search?q=${searchText}&limit=4`, {json:true})
    console.log('body', body);
    return body;
};


itemsRouter.get('/items', async (req, res) => {
    try {
        const searchResults = await getSearchResultsFromAPI(req.query.q);
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