import createHashMap from "./createHashMap.mjs";

const hashMap = createHashMap();

hashMap.set("harry", "potter");
hashMap.set("Severus", "Snape");
hashMap.set("harry", "the prince"); // previous entry should be overwritten

console.log(`
INITIAL`);
hashMap.print();

hashMap.remove("harry");
console.log(`
AGAIN`);
hashMap.print(); // harry should be gone
