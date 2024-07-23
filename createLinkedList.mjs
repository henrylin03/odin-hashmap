import createNode from "./createNode.mjs";

export default function createLinkedList() {
  let headNode = null;

  const contains = (key) => {
    if (headNode === null) return false;

    let currentNode = headNode;
    while (currentNode) {
      if (currentNode.key === key) return true;
      currentNode = currentNode.nextNode;
    }

    return false;
  };

  const append = (key, value) => {
    const newNode = createNode(key, value);

    if (headNode === null) {
      headNode = newNode;
      return;
    }

    let currentNode = headNode;
    while (currentNode.nextNode !== null) currentNode = currentNode.nextNode;
    currentNode.nextNode = newNode;
  };

  const print = () => {
    let res = "";
    if (headNode === null) return "null";

    let currentNode = headNode;
    while (currentNode) {
      res += `( ${currentNode.key}: ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    res += "null";

    console.log(res);
    return res;
  };

  return { append, contains, print };
}
