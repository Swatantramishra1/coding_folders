// inputArray = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]]
let resArra = [];

flattenArray = function (arr) {

    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            flattenArray(arr[i]);
        } else {
            resArra.push(arr[i])
        }
    }
}

console.log(flattenArray([1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]], []))

console.log(resArra);