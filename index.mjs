import createHashMap from "./createHashMap.mjs";

const hashMap = createHashMap();

hashMap.set("harry", "potter");
hashMap.set("arrhy", "what is this");
hashMap.set("Severus", "Snape");
hashMap.set("harry", "the prince");

console.log(`
The current bucket size is ${hashMap.getBucketSize()}`);
hashMap.print();

hashMap.set("hermione", "granger");
// hashMap.set("ron", "weasley");

// console.log(`
// The bucket size is now ${hashMap.getBucketSize()}`);
// hashMap.print();