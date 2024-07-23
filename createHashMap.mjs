export default function createHashMap() {
  let bucketSize = 16;

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

    // find bucket at index of hashcode

    // store key/value pair in bucket

    // if there is already the _same key_, we overwrite

    // if there is not the same key already, we append to linkedlist
    return;
  };

  return { hash, set };
}
