const has = p => o => o.hasOwnProperty(p);
var has = function (p) {
    return function (o) {
        return o.hasOwnProperty(p);
    }
}