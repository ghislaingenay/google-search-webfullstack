const filtering = (array, param) => {
    let reg = new RegExp(param, "gi")
    return array.filter((element, id) => {
        return element.description.match(param) || element.title.match(param) || element.description.match(param) 
    })
}

module.exports = filtering