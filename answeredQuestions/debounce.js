function memoize(fn) {
    let cache = {};
    return function() {
        const args = JSON.stringify(arguments);
        if(cache[args]) {
            return cache[elm];
        } else {
            let ans = fn.apply(this, arguments)
            cache[args] = ans;
            return ans;
        }
    }
}


let input = `a.b.c.d=12`
{
    a: {
        b: {
            c: {
                d: 12
            }
        }
    }
}

function getObj(input,currIndx = 0, obj= {}) {
    let arr = input.split(".");

    if(input.length < 0) {
        return obj;
    }

    if(arr.length > 2) {
        let val = arr[0];
        for (const key in obj) {
            if (!obj.hasOwnProperty(key)) {
               obj[key] = {}; 
            }
        }
    } else {

    }
}
