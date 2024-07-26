import createHashMap from "./createHashMap.mjs";

const hashMap = createHashMap();

hashMap.set("harry", "potter");
hashMap.set("arrhy", "what is this");
hashMap.set("Severus", "Snape");
hashMap.set("harry", "the prince"); // previous entry should be overwritten

console.log(`
INITIAL: ${hashMap.length()}`); // expected: 3

hashMap.remove("harry");
console.log(`
AGAIN: ${hashMap.length()}`); // expected: 2

hashMap.remove("Severus");
console.log(`
AGAIN: ${hashMap.length()}`); // expected: 1

hashMap.remove("asdf");
console.log(`
AGAIN: ${hashMap.length()}`); // expected: 1
