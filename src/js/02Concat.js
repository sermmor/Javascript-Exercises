const concat = (a, b) => [...a, ...b];

// -------- Show tests in console.
console.log("-- 2. Concat --");
let list1 = [20, 42, 61, 57];
let list2 = [64, 98, 4];
console.log("Concat result of [20, 42, 61, 57] + [64, 98, 4]: " + concat(list1, list2));
