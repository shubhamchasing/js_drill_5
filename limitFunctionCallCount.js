const limitFunctionCallCount = (cb,n) => {
    let counter = n;
   
    const invokeCb = (...arg) => {

        if (counter > 0){
            --counter;
            return cb(...arg);
        }
        else{
            return null;
        }
    }
    return invokeCb;
}


module.exports = limitFunctionCallCount;
