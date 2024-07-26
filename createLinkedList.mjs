import createNode from "./createNode.mjs";

export default function createLinkedList() {
  let headNode = null;

  const isEmpty = () => headNode === null;

  const findNode = (key) => {
    if (isEmpty()) return null;

    let currentNode = headNode;
    while (currentNode) {
      if (currentNode.key === key) return currentNode;
      currentNode = currentNode.nextNode;
    }

    return null;
  };

  const append = (key, value) => {
    const newNode = createNode(key, value);

    if (isEmpty()) {
      headNode = newNode;
      return;
    }

    let currentNode = headNode;
    while (currentNode.nextNode !== null) currentNode = currentNode.nextNode;
    currentNode.nextNode = newNode;
  };

  const toString = () => {
    let res = "";
    if (isEmpty()) return "null";

    let currentNode = headNode;
    while (currentNode) {
      res += `( ${currentNode.key}: ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    res += "null";

    return res;
  };

  return { append, findNode, isEmpty, toString };
}
