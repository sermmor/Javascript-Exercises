
// Clone.
function clone(source) {
    const result = {};
    for (const key in source) {
        result[key] = source[key];
    }
    return result;
}

// Merge.
function merge(source, target) {
    const result = clone(target);
    for (const key in source) {
        result[key] = source[key];
    }
    return result;
}

// -------- Show tests in console.
const objToMerge = {
    name: "Jumbo Cactuar",
    hp: 330000,
    agility: 3,
    luck: 50,
    specialAttack: "10000 Needles",
    isABoss: true,
    numberOfAttacksByTurn: 2,
    isInmmuneToStatus: true,
    specialItem: "Guardian Force Cactuar",
};
const objToCloneMerge = {
    name: "Cactuar",
    race: "plant",
    strenght: 160,
    magic: 123,
    defense: 81,
    spirit: 142,
    agility: 200,
    speed: 18,
    luck: 155,
    hp: 2950,
    mp: 35,
    resistanceElements: ["ice", "water"],
    resistanceStatus: ["stone"],
    specialAttack: "1000 Needles",
    isABoss: false,
    experience: 255,
    gil: 24,
};

console.log("-- 3. Clone Merge --");
let objCloned = clone(objToCloneMerge);
console.log("Clone result: ");
console.dir(objCloned);
console.log("(¿Are origin equals to clone? " + (objCloned === objToCloneMerge) + ")");
console.log("Merge result: ");
console.dir(merge(objToMerge, objToCloneMerge));
