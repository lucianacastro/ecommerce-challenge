const { Router } = require('express');
const itemsRouter = Router();

const { getSearchResults, getItem, expandSearchResults, expandItem } = require('../services/api');
const { mapSearchResultsToResponse, mapItemToResponse } = require('../transformer/items');

itemsRouter.get('/items', async (req, res) => {
    try {
        const searchResults = await expandSearchResults( await getSearchResults(req.query.q));
        res.send(mapSearchResultsToResponse(searchResults));
    } catch (error) {
        console.error(error);
        res.statusCode(500).send({error: 'Internal server error'});
    }
});

itemsRouter.get('/items/:itemId', async (req, res) => {
    try {
        const item = await expandItem((await getItem(req.params.itemId)));
        res.send(mapItemToResponse(item));
    } catch (error) {
        console.error(error);
        res.statusCode(500).send({error: 'Internal server error'})
    }
    
});

module.exports = itemsRouter;