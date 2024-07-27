import createHashMap from "./createHashMap.mjs";

const hashMap = createHashMap();

hashMap.set("harry", "potter");
hashMap.set("arrhy", "what is this");
hashMap.set("Severus", "Snape");
hashMap.set("harry", "the prince");

console.log(hashMap.values()); // expected: ["the prince", "what is this", "Snape"]
hashMap.remove("harry");
console.log(hashMap.values()); // expected: ["what is this", "Snape"]
