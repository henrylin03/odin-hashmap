export default function createHashMap() {
  const hash = (key) => {
    let hashCode = 0;
    const PRIME_NUMBER = 31;
    
    for (let i = 0; i < key.length; i++) {
      hashCode = PRIME_NUMBER * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  };

  return { hash };
}
