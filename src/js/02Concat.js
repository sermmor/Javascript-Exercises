// Concat.
const concat = (a, b) => [...a, ...b];

// -------- Show tests in console.
console.log("-- 2. Concat --");
const list1 = [20, 42, 61, 57];
const list2 = [64, 98, 4];
console.log("Concat result of [20, 42, 61, 57] + [64, 98, 4]: " + concat(list1, list2));
