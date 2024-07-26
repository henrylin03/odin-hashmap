import createHashMap from "./createHashMap.mjs";

const hashMap = createHashMap();

hashMap.set("harry", "potter");
hashMap.set("arrhy", "what is this");
hashMap.set("Severus", "Snape");
hashMap.set("harry", "the prince");

console.log(hashMap.keys()); // expected: ["harry", "arrhy", "Severus"]
hashMap.remove("harry");
console.log(hashMap.keys()); // expected: ["arrhy", "Severus"]
