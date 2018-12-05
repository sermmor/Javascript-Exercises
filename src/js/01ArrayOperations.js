// Head.
const head = ([a, ...rest]) => a;

// Tail.
const tail = ([a, ...rest]) => rest;

// Init.
const init = (l) => l.slice(0, l.length - 1);

// Last.
const last = (l) => l[l.length - 1];

// -------- Show tests in console.
console.log("-- 1. Array Operations --");
const listToShow = [20, 42, 61, 57, 64, 98];
console.log("Head result of [20, 42, 61, 57, 64, 98]: " + head(listToShow));
console.log("Tail result of [20, 42, 61, 57, 64, 98]: " + tail(listToShow));
console.log("Init result of [20, 42, 61, 57, 64, 98]: " + init(listToShow));
console.log("Last result of [20, 42, 61, 57, 64, 98]: " + last(listToShow));
