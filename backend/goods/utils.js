const goods = require("./goodlist")

function getGoodsList(type = 'sub') {
    let result = [];

    if (type === 'all') result = goods;
    else if (type === 'sub' || type === 'subscription') {
        result = goods.filter(i => {
            if (i.type === 'subscription') return i;
            else return;
        })
    } else if (type === 'script') {
        result = goods.filter(i => {
            if (i.type === 'script') return i;
            else return;
        })
    }

    return result
}

function filterGoodsByQuery(q, type = 'sub') {
    const goods = getGoodsList(type)

    if(!q) return goods

    const result = goods.filter(i => {
        const name = i.name.toLowerCase()
        const displayName = i.displayName.toLowerCase()
        const desc = i.desc.toLowerCase()
        const type = i.type.toLowerCase()
        const cost = i.cost.toString()

        const fullString = `${name} ${displayName} ${desc} ${type} ${String(cost)}`

        if (fullString.includes(q.toLowerCase())) {
            console.log(i)
            return i
        }
    })


    return result
}


module.exports = {
    getGoodsList,
    filterGoodsByQuery
}