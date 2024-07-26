import createHashMap from "./createHashMap.mjs";

const hashMap = createHashMap();

hashMap.set("harry", "potter");
hashMap.set("Severus", "Snape");
hashMap.set("harry", "the prince"); // previous entry should be overwritten

// hashMap.print();

console.log(hashMap.has("")); // returns false
console.log(hashMap.has("Severus")); // returns true
