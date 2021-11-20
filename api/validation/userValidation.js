const exist = function (data) {
    if (!data.name)
        return false
    if (!data.username)
        return false
    if (!data.birtdate)
        return false
    if (!data.birtdate)
        return false
    if (!data.addressNumber)
        return false
    if (!data.primayPhone)
        return false
    if (!data.description)
        return false

    return true
}
module.exports = exist