
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

const getDecimalLength = (number) => {
    const num = number.toString().split('.');
    return num[1] ? num[1].length : 0;
}

const mapResultToItem = (item) => ({
    'id': item.id,
    'title': item.title,
    'price': {
        'currency': item.currency_id,
        'amount': item.price,
        'decimals': getDecimalLength(item.price),
    },
    'picture': item.pictures[0].secure_url,
    'condition': item.condition,
    'free_shipping': item.shipping.free_shipping,
    'city': item.seller_address.state.name,
});     

const mapSearchResultsToResponse = (searchResults) => {
    const { results, filters } = searchResults;
    return {
        'author': {
            'name': 'Luciana',
            'lastname': 'Castro',
        },
        'categories': mapCategories(filters),
        'items': results.map(item => mapResultToItem(item)),
    }
};

const mapItemToResponse = (item) => {
    return {
        'author': {
            'name': 'Luciana',
            'lastname': 'Castro',
        },
        'item': { 
            ...mapResultToItem(item),
            'sold_quantity': item.sold_quantity,
            'description': item.description
        }
    }
}

module.exports = { mapSearchResultsToResponse, mapItemToResponse }