class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  // SET
  // accepts a key and a value
  // hashes the key
  // store the key-value pair inthe hash table via separate chaining
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  // GET
  // accepts a key
  // hashes the key
  // retrieve the key-value pair in the hash table and return the value
  // if the key isn't found, return undefined
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  // KEYS
  // loop through the hash table array and return an array of keys in the table
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // handle duplicates by removing them and only returning unique values
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }

  // VALUES
  // loop through the hash table array and return an array of values in the table
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // handle duplicates by removing them and only returning unique values
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable(3);
ht.set("hello world", "goodbye!");
ht.set("dogs", "are cool");
ht.set("cats", "are fine");
ht.set("cats", "are fine");
console.log(ht);
console.log(ht.get("cats"));
console.log(ht.get("dogs"));
console.log(ht.get("hello world"));
console.log(ht.get("this doesn't exist"));
console.log(ht.values());
console.log(ht.keys());
ht.keys().forEach(key => console.log(ht.get(key)))