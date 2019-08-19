const { Router } = require('express');
const itemsRouter = Router();

const { getSearchResults, getItem, getItemDescription } = require('../services/api');

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
    'picture': item.pictures[0].secure_url,
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


const expandSearchResultsFromAPI = async (searchResults) => {
    const { results } = searchResults;
    const itemsPromises = results.map(result => getItem(result.id));
    const expandedResults = await Promise.all(itemsPromises)
        .then(items => results.map((result, idx) => ({
            ...result, 
            pictures: items[idx].pictures,
        })));
    return { ...searchResults, results: expandedResults };
};


// Mapping Item

const mapItemToResponse = (item) => {
    return {
        'author': { // https://api.mercadolibre.com/users/{sellerId} ????
            'name': '',
            'lastName': '',
        },
        'item': mapResultToItem(item),
        'sold_quantity': item.sold_quantity,
        'description': item.description
    }
}

const expandItemFromAPI = async (item) => {
    const itemDescription = await getItemDescription(item.id);
    return { ...item, description: itemDescription.plain_text }
}

itemsRouter.get('/items', async (req, res) => {
    try {
        //const searchResults = await getSearchResults(req.query.q);
        const searchResults = await expandSearchResultsFromAPI( await getSearchResults(req.query.q));
        res.send(mapSearchResultsToResponse(searchResults));
    } catch (error) {
        console.error(error);
        res.statusCode(500).send({error: 'Internal server error'});
    }
});

itemsRouter.get('/items/:itemId', async (req, res) => {
    try {
        const item = await expandItemFromAPI((await getItem(req.params.itemId)));
        res.send(mapItemToResponse(item));
    } catch (error) {
        console.error(error);
        res.statusCode(500).send({error: 'Internal server error'})
    }
    
});

module.exports = itemsRouter;