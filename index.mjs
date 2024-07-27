import createHashMap from "./createHashMap.mjs";

const hashMap = createHashMap();

hashMap.set("harry", "potter");
hashMap.set("arrhy", "what is this");
hashMap.set("Severus", "Snape");
hashMap.set("harry", "the prince");

hashMap.print();
console.log("----");

hashMap.set("hermione", "granger");
hashMap.set("ron", "weasley");

hashMap.print();
