import createHashMap from "./createHashMap.mjs";

const hashMap = createHashMap();
console.log(hashMap.hash("heooll"));
console.log(hashMap.set("harry", "potter"));
console.log(hashMap.set("harry", "the prince")); // previous entry should be overwritten
