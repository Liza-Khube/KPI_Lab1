//Exercise 2.1

const ex_21_arr = [30, 12345n, null, { type: 'cat', name: 'Murka' }, true, -900, "bird", false, true, true, 87, "Banana", -0.1, "Mum", false, -976532, 4545, "zebra", "Hello world!", { color: 'blue', shape: 'Circle' }];

const ex_21_hash = { number: 0, string: 0, boolean: 0, bigint: 0, object: 0 };

const count_types_in_array = (arr, hash) => {
    for (const element of arr) {
        hash[typeof element] += 1;
    }
    return hash;
}

console.dir(count_types_in_array(ex_21_arr, ex_21_hash));


//Exercise 2.2

const ex_22_arr = [30, 12345n, null, { type: 'cat', name: 'Murka' }, true, -900, "bird", false, true, true, 87, "Banana", -0.1, "Mum", false, -976532, 4545, "zebra", "Hello world!", { color: 'blue', shape: 'Circle' }];

const ex_22_hash = {};

for (const element of ex_22_arr) {
    const propertyname = typeof element;
    if (ex_22_hash[propertyname] === undefined) {
        ex_22_hash[propertyname] = 0;
    }
    ex_22_hash[propertyname]++;
}
console.dir(ex_22_hash);
