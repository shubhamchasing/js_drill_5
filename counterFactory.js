const counterFactory = (value = 0) => {

    let counter = value;

    let obj = { increment : () => { return ++counter; } ,

                decrement : () => { return --counter;}
              }

    return  obj
 }

module.exports = counterFactory;
