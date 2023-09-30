// Get list of goods
const goods = require("./goodlist")

// Function to get array of goods, type defines what... type it will return "subscription" or "script"
function getGoodsList(type = 'sub') {
    // What it will return
    let result = [];

    // If type "all" it will return the entire list
    if (type === 'all') result = goods;

    // If type "sub" it will return only subscription goods
    else if (type === 'sub' || type === 'subscription') {

        // Filter goods by type "subscription"
        result = goods.filter(i => {
            if (i.type === 'subscription') return i;
            else return;
        })

        // If type "script" it will return only subscription goods
    } else if (type === 'script') {

        // Filter goods by type "script"
        result = goods.filter(i => {
            if (i.type === 'script') return i;
            else return;
        })
    }

    // Return the result
    return result
}

// Function to filters goods by query, made for search system
function filterGoodsByQuery(q, type = 'sub') {

    // Get goods list
    const goods = getGoodsList(type)

    // If it's empty (if the search bar is empty) it will return the entire list (goods)
    if (!q) return goods

    // Filter goods by query
    const result = goods.filter(i => {

        // Defines by which props of good it can search
        const name = i.name.toLowerCase()
        const displayName = i.displayName.toLowerCase()
        const desc = i.desc.toLowerCase()
        const type = i.type.toLowerCase()
        const cost = i.cost.toString()

        // Defines the full string of good
        const fullString = `${name} ${displayName} ${desc} ${type} ${String(cost)}`

        // Filter by names 
        if (fullString.includes(q.toLowerCase())) {

            // All vars that query will search through
            const name = i.name.toLowerCase()
            const displayName = i.displayName.toLowerCase()
            const desc = i.desc.toLowerCase()
            const type = i.type.toLowerCase()
            const cost = i.cost.toString()

            // Combine all variables into 1 string
            const fullString = `${name} ${displayName} ${desc} ${type} ${String(cost)}`

            if (fullString.includes(q.toLowerCase())) return i
        }
    })


    return result
}


module.exports = {
    getGoodsList,
    filterGoodsByQuery
}