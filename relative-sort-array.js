
var relativeSortArray = function (arr1, arr2) {
    const rest = [];
    const set = new Set(arr2);
    const map = new Map();
    let result = []
    for (let item of arr1) {
        if (!set.has(item)) {
            rest.push(item);
        } else {
            const count = map.has(item) ? map.get(item) + 1 : 1;
            map.set(item, count)
        }
    }

    for (let item of arr2) {
        const count = map.get(item);
        for (let i = 0; i < count; i++) {
            result.push(item);
        }
    }

    result = [...result, ...rest.sort((a, b) => a - b)]

    return result;
}; 
