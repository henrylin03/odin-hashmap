import createNode from "./createNode.mjs";

export default function createLinkedList() {
  let headNode = null;

  const append = (val) => {
    const newNode = createNode(val);

    if (headNode === null) return (headNode = newNode);

    let currentNode = headNode;
    while (currentNode.nextNode !== null) currentNode = currentNode.nextNode;
    currentNode.nextNode = newNode;
  };

  const print = () => {
    let res = "";
    if (headNode === null) return "null";

    let currentNode = headNode;
    while (currentNode) {
      res += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    res += "null";

    console.log(res);
    return res;
  };

  return { append, print };
}
