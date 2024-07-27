import createHashMap from "./createHashMap.mjs";

const hashMap = createHashMap();

hashMap.set("harry", "potter");
hashMap.set("arrhy", "what is this");
hashMap.set("Severus", "Snape");
hashMap.set("harry", "the prince");

console.log(hashMap.entries()); // expected: [["harry", "the prince"], ["arrhy", "what is this"], ["Severus", "Snape"]]
hashMap.remove("harry");
console.log(hashMap.entries()); // expected: [["arrhy", "what is this"], ["Severus", "Snape"]]
