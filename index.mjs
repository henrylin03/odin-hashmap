import createHashMap from "./createHashMap.mjs";

const test = createHashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

// pushing past load factor
test.set("moon", "silver");

// override some values
test.set("apple", "green"); // passed

// testing other methods

// console.log(test.get("apple")); // expected: "green"
// console.log(test.has("elephant")); // expected: true
// console.log(test.remove("moon")); // passed
console.log(test.keys());
console.log(test.values());
console.log(test.entries());

test.clear();
