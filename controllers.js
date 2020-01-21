var getters = require('./contentful/getters')

module.exports = {
    //Get all Components from Contentful.
    getComponents: (req, res, next) => {
        getters.cfGetComponents('4YGV8ADz9tMAc2hS2Tr9th')
        return res.status(200).send('Working, yayyy. Check the console for component info.');
        // return res.status(404).json(null);
    },
    getProducts : (req, res, next) => {
        getters.cfGetProducts('products')
        return res.status(200).send('Working, yayyy. Check the console for component info.');
    }

}