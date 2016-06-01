
function equals(obj1, obj2){
    if(obj1 == null && obj2 == null)
        return true;

    if(obj1 == undefined && obj2 == undefined)
        return true;

    if(typeof(obj1) != typeof(obj2))
        return false;

    if(typeof (obj1) == 'object')
    {
        if(Object.keys(obj1).length != Object.keys(obj2).length)
            return false;

        for(var prop in obj1){
            if(!obj1.hasOwnProperty(prop) || !obj2.hasOwnProperty(prop))
                return false;
            var result = equals(obj1[prop], obj2[prop])
            if(!result)
                return false;
        }

        return true;
    }
    return obj1 === obj2;
}

module.exports = equals;