var components = require('./contentful/components')

module.exports = {
    //Get all Components from Contentful.
    getComponents: (req, res, next) => {
        components.cfGetComponents('3o2HSFP598DnfmxYuS8eNM')
        return res.status(200).send('Working, yayyy. Check the console for component info.');
        // return res.status(404).json(null);
    },


}