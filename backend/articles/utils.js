const articles = require('./articles.json')

function findArticle(uniqueName) {
    return articles.find(i => i.unique_name === uniqueName)
}

module.exports = {
    findArticle
}