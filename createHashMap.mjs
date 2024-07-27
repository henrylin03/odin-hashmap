import createLinkedList from "./createLinkedList.mjs";

export default function createHashMap() {
  let bucketSize = 16;
  let buckets = generateBuckets();
  const LOAD_FACTOR = 0.8; // can be a number between .75 and 1

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

  const setBucketSize = () => {
    const storedKeysCount = length();
    const threshold = Math.ceil(LOAD_FACTOR * bucketSize);

    if (storedKeysCount < threshold) return;

    const currentEntries = entries();
    bucketSize *= 2;
    buckets = generateBuckets();
    currentEntries.forEach((entry) => set(entry[0], entry[1]));
  };

  function generateBuckets() {
    return Array.from({ length: bucketSize }, () => createLinkedList());
  }

  const length = () => {
    let count = 0;
    for (let i = 0; i < bucketSize; i++) {
      count += buckets[i].length();
    }
    return count;
  };

  const set = (key, value) => {
    const hashCode = hash(key);
    const bucket = buckets[hashCode];

    const duplicateNode = bucket.findNode(key);
    if (duplicateNode) return (duplicateNode.value = value);

    bucket.append(key, value);
    setBucketSize();
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

    if (!bucket.findNode(key)) return false;
    else {
      bucket.removeNode(key);
      return true;
    }
  };

  const keys = () => {
    const res = [];

    for (let i = 0; i < bucketSize; i++) {
      const bucket = buckets[i];
      if (bucket.isEmpty()) continue;
      res.push(...bucket.getKeys());
    }

    return res;
  };

  const values = () => {
    const res = [];

    for (let i = 0; i < bucketSize; i++) {
      const bucket = buckets[i];
      if (bucket.isEmpty()) continue;
      res.push(...bucket.getValues());
    }

    return res;
  };

  const entries = () => {
    const res = [];

    for (let i = 0; i < bucketSize; i++) {
      const bucket = buckets[i];
      if (bucket.isEmpty()) continue;
      res.push(...bucket.getKeyValues());
    }

    return res;
  };

  const clear = () => {
    bucketSize = 16;
    buckets = generateBuckets();
  };

  const print = () =>
    buckets.forEach((bucket, hashCode) =>
      console.log("bucket:", hashCode, bucket.toString())
    );

  return {
    clear,
    entries,
    get,
    has,
    hash,
    keys,
    length,
    print,
    remove,
    set,
    values,
  };
}
