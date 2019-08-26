const { mapSearchResultsToResponse, mapItemToResponse } = require('./items.js');
const itemMock = require('./item.mock.json');
const searchResultMock = require('./search-results.mock.json');

describe('mapItemToResponse', () => {
    it('should add the author object', () => {
        const result = mapItemToResponse(itemMock);
        expect(result).toHaveProperty('author.name', 'Luciana');
        expect(result).toHaveProperty('author.lastname', 'Castro');
    });

    it('should add item sold_quantity', () => {
        const result = mapItemToResponse(itemMock);
        expect(result).toHaveProperty('item.sold_quantity', 100);
    });

    it('should add item description', () => {
        const itemWithDescriptionMock = {
            ...itemMock,
            description: 'Iphone segunda mano',
        };
        const result = mapItemToResponse(itemWithDescriptionMock);
        expect(result).toHaveProperty('item.description', 'Iphone segunda mano');
    });

    it('should map a non expanded search result item properly', () => {
        const result = mapItemToResponse(itemMock);
        expect(result).toEqual({
            "author": {
                "name": "Luciana",
                "lastname": "Castro"
            },
            "item": {
                "id": "MLA771186525",
                "title": "iPhone 7 Apple 32gb Sellado Libre + Original Gtia + Templado",
                "price": {
                    "currency": "ARS",
                    "amount": 39989.99,
                    "decimals": 2
                },
                "picture": "",
                "condition": "new",
                "free_shipping": true,
                "city": "Capital Federal",
                "sold_quantity": 100,
                "description": "",
            }
        });
    });

    it('should map an expanded search result item properly', () => {
        const itemExpandedMock = {
            ...itemMock,
            pictures: [ {
                "id": "751692-MLA31081757564_062019",
                "url": "http://mla-s2-p.mlstatic.com/751692-MLA31081757564_062019-O.jpg",
                "secure_url": "https://mla-s2-p.mlstatic.com/751692-MLA31081757564_062019-O.jpg",
                "size": "400x500",
                "max_size": "791x988",
                "quality": ""
            } ],
        };
        const result = mapItemToResponse(itemExpandedMock);
        expect(result).toEqual({
            "author": {
                "name": "Luciana",
                "lastname": "Castro"
            },
            "item": {
                "id": "MLA771186525",
                "title": "iPhone 7 Apple 32gb Sellado Libre + Original Gtia + Templado",
                "price": {
                    "currency": "ARS",
                    "amount": 39989.99,
                    "decimals": 2
                },
                "picture": "https://mla-s2-p.mlstatic.com/751692-MLA31081757564_062019-O.jpg",
                "condition": "new",
                "free_shipping": true,
                "city": "Capital Federal",
                "sold_quantity": 100,
                "description": "",
            }
        });
    });
});

describe('mapSearchResultsToResponse', () => {
    it('should add the author object', () => {
        const result = mapSearchResultsToResponse(searchResultMock);
        expect(result).toHaveProperty('author.name', 'Luciana');
        expect(result).toHaveProperty('author.lastname', 'Castro');
    });

    it('should add the categories array', () => {
        const result = mapSearchResultsToResponse(searchResultMock);
        expect(result.categories).toEqual([
            "Celulares y Teléfonos",
            "Celulares y Smartphones"
        ]);
    });

    it('should map non expanded items array properly', () => {
        const result = mapSearchResultsToResponse(searchResultMock);
        expect(result.items).toEqual([{
            "id": "MLA771186525",
            "title": "iPhone 7 Apple 32gb Sellado Libre + Original Gtia + Templado",
            "price": {
                "currency": "ARS",
                "amount": 39989.99,
                "decimals": 2
            },
            "picture": "",
            "condition": "new",
            "free_shipping": true,
            "city": "Capital Federal"
        }]);
    });

    it('should map an expanded items array properly', () => {
        const searchResultWithItemExpandedMock = {
            ...searchResultMock,
            results: [{
                ...searchResultMock.results[0],
                pictures: [ {
                    "id": "751692-MLA31081757564_062019",
                    "url": "http://mla-s2-p.mlstatic.com/751692-MLA31081757564_062019-O.jpg",
                    "secure_url": "https://mla-s2-p.mlstatic.com/751692-MLA31081757564_062019-O.jpg",
                    "size": "400x500",
                    "max_size": "791x988",
                    "quality": ""
                } ],
            }],
        };
        const result = mapSearchResultsToResponse(searchResultWithItemExpandedMock);
        expect(result.items).toEqual([{
            "id": "MLA771186525",
            "title": "iPhone 7 Apple 32gb Sellado Libre + Original Gtia + Templado",
            "price": {
                "currency": "ARS",
                "amount": 39989.99,
                "decimals": 2
            },
            "picture": "https://mla-s2-p.mlstatic.com/751692-MLA31081757564_062019-O.jpg",
            "condition": "new",
            "free_shipping": true,
            "city": "Capital Federal",
        }]);
    });

});