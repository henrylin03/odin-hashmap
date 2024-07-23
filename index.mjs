import createHashMap from "./createHashMap.mjs";
import createLinkedList from "./createLinkedList.mjs";

const hashMap = createHashMap();
console.log(hashMap.hash("heooll"));

const list = createLinkedList();
list.append(1);
list.append(2);
list.print();
