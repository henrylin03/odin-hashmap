import createNode from "./createNode.mjs";

export default function createLinkedList() {
  let headNode = null;

  const findNode = (key) => {
    if (headNode === null) return null;

    let currentNode = headNode;
    while (currentNode) {
      if (currentNode.key === key) return currentNode;
      currentNode = currentNode.nextNode;
    }

    return null;
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

  const toString = () => {
    let res = "";
    if (headNode === null) return "null";

    let currentNode = headNode;
    while (currentNode) {
      res += `( ${currentNode.key}: ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    res += "null";

    return res;
  };

  return { append, findNode, toString };
}
