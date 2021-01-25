var throttle = (fn, delay) => {
    let inThrottle;
    return function() {
        const args = arguments;
    const context = this;
    
        if(!inThrottle) {
            fn.apply(context,args);
            inThrottle = true; 

            setTimeout(() => {
                inThrottle = false; 
            }, delay);
        }

        
    }
}

function say() {
    console.log("throrrle")
}


throttle(say, 500)();
throttle(say, 500)();
throttle(say, 500)();