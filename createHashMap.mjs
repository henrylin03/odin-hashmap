import createLinkedList from "./createLinkedList.mjs";

export default function createHashMap() {
  let bucketSize = 4; // TODO: PUT BACK TO 16 // aka capacity
  //? getBucketSize() method to handle all the logic? if it's less than 16 (currently, 4, for testing), then just return 16 (take the max of (16, X))
  let buckets = Array.from({ length: bucketSize }, () => createLinkedList()); //? potentially this can go into a "generateBuckets()" method, which then checks the bucketSize at the time before generating?

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

  const getBucketSize = () => bucketSize; // TODO: delete
  const setBucketSize = () => {
    const LOAD_FACTOR = 0.8; // can be a number between .75 and 1
    const storedKeysCount = length();
    const threshold = Math.ceil(LOAD_FACTOR * bucketSize);

    console.log("bucketSize:", bucketSize);
    console.log("threshold: ", threshold);

    if (storedKeysCount < threshold) return;

    console.log("!!!TIME TO EXPAND!!!");
    bucketSize *= 2;
    console.log("bucketSize:", bucketSize);
  };

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
    if (duplicateNode) duplicateNode.value = value;
    else bucket.append(key, value);

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
      res.push(bucket.getKeyValues());
    }

    return res;
  };

  const clear = () =>
    (buckets = Array.from({ length: bucketSize }, () => createLinkedList()));

  const print = () =>
    buckets.forEach((bucket, hashCode) =>
      console.log("bucket:", hashCode, bucket.toString())
    );

  return {
    clear,
    entries,
    get,
    getBucketSize,
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
