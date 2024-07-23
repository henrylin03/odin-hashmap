import createNode from "./createNode.mjs";

export default function createLinkedList() {
  let headNode = null;

  const findAndReplace = (key, newValue) => {
    if (headNode === null) return null;

    let currentNode = headNode;
    while (currentNode) {
      if (currentNode.key === key) {
        currentNode.value = newValue;
        return null;
      }
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

  return { append, findAndReplace, print };
}
