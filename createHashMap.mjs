import createLinkedList from "./createLinkedList.mjs";

export default function createHashMap() {
  let bucketSize = 16;
  const buckets = new Array(bucketSize).fill(createLinkedList());

  const hash = (key) => {
    const keyIsString = typeof key === "string" || key instanceof String;
    if (!keyIsString) key = String(key);

    let hashCode = 0;
    const PRIME_NUMBER = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (PRIME_NUMBER * hashCode + key.charCodeAt(i)) % bucketSize;
    }

    return hashCode;
  };

  const set = (key, value) => {
    const hashCode = hash(key);
    const bucket = buckets[hashCode];

    const duplicateNode = bucket.findNode(key);
    if (duplicateNode) duplicateNode.value = value;
    else bucket.append(key, value);
  };

  return { hash, set };
}
