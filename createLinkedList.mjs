import createNode from "./createNode.mjs";

export default function createLinkedList() {
  let headNode = null;

  const isEmpty = () => headNode === null;

  const length = () => {
    let count = 0;
    if (isEmpty()) return count;

    let currentNode = headNode;
    while (currentNode) {
      count++;
      currentNode = currentNode.nextNode;
    }

    return count;
  };

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

  const removeNode = (key) => {
    if (isEmpty()) return null;
    if (length() === 1) return (headNode = null);

    let currentNode = headNode;
    while (currentNode.nextNode.key !== key) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = currentNode.nextNode.nextNode;
  };

  const getKeyValues = () => {
    const resArray = [];

    if (isEmpty()) return resArray;

    let currentNode = headNode;
    while (currentNode) {
      resArray.push([currentNode.key, currentNode.value]);
      currentNode = currentNode.nextNode;
    }

    return resArray;
  };

  const getKeys = () => {
    const keys = [];

    if (isEmpty()) return keys;

    let currentNode = headNode;
    while (currentNode) {
      keys.push(currentNode.key);
      currentNode = currentNode.nextNode;
    }

    return keys;
  };

  const getValues = () => {
    const values = [];

    if (isEmpty()) return values;

    let currentNode = headNode;
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.nextNode;
    }

    return values;
  };

  const toString = () => {
    if (isEmpty()) return "null";

    let res = "";
    let currentNode = headNode;
    while (currentNode) {
      res += `( ${currentNode.key}: ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    res += "null";

    return res;
  };

  return {
    append,
    findNode,
    getKeys,
    getKeyValues,
    getValues,
    isEmpty,
    length,
    removeNode,
    toString,
  };
}
