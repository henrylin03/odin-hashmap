import createLinkedList from "./createLinkedList.mjs";

export default function createHashMap() {
  let bucketSize = 16;
  const buckets = Array.from({ length: bucketSize }, () => createLinkedList());

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

  const get = (key) => {
    const hashCode = hash(key);
    const bucket = buckets[hashCode];

    const matchingNode = bucket.findNode(key);

    return matchingNode ? matchingNode.value : null;
  };

  const has = (key) => {
    const hashCode = hash(key);
    const bucket = buckets[hashCode];
    return bucket.findNode(key) ? true : false;
  };

  const remove = (key) => {
    const hashCode = hash(key);
    const bucket = buckets[hashCode];

    if (bucket.isEmpty() || !has(key)) return false;
    bucket.removeNode(key);

    return true;
  };

  const print = () =>
    buckets.forEach((bucket, hashCode) =>
      console.log("bucket:", hashCode, bucket.toString())
    );

  return { get, has, hash, print, remove, set };
}
