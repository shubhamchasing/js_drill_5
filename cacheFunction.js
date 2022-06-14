const cacheFunction = (cb) =>{

    let cache = {};

    const invokeCb = (...arg) => {

        let argTostr = JSON.stringify(arg)

        if(cache.hasOwnProperty(argTostr)){

            return cache[argTostr];
        }

        else{

            let returnVal = cb(...arg);
            cache[argTostr] = returnVal

            return returnVal
        }

    }
    return invokeCb;

} 
module.exports = cacheFunction;
