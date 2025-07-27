class HashTable {
 constructor(size = 10) {
  this.size=size
        this.table = new Array(size);
    }

  hash(key) {
    key = key.toString();
    let value = 0;
    for (let i = 0; i < key.length; i++) {
      value += (key.charCodeAt(i) * i) % this.size;
    }
    return value;
  }

set(key, value) {
  const index = this.hash(key);
  if (!this.table[index]) this.table[index] = [];
  let table = this.table[index];
  for (let i = 0; i < table.length; i++) {
    const [storedKey] = table[i];
    if (storedKey == key) {
      table[i] = [key, value];
      return;
    }
  }
  table.push([key, value]);
}


  get(key) {
    const index = this.hash(key);
    let table = this.table[index];
    for (let i = 0; i < table.length; i++) {
      const [storedKey, storedValue] = table[i];
      if (key === storedKey) {
        return storedValue;
      }
    }
    return null;
  }

  remove(key) {
    const index = this.hash(key);
    let table = this.table[index];
    for (let i = 0; i < table.length; i++) {
      const [storedKey, storedValue] = table[i];
      if (key === storedKey) {
        table.splice(i, 1);
        return;
      }
    }
  }

  clear() {
    for (let i = 0; i < this.table.length; i++) {
      this.table[i] = [];
    }
  }
  containsValue(value) {
    for (let i = 0; i < this.table.length; i++) {
      const table = this.table[i];
      for (let j = 0; j < table.length; j++) {
        const [, storedValue] = table[j];
        if (storedValue === value) {
          return true;
        }
      }
    }
    return false;
  }

  containsKey(key) {
    const index = this.hash(key);
    const table = this.table[index];
    for (let i = 0; i < table.length; i++) {
      const [storedKey] = table[i];
      if (key === storedKey) {
        return true;
      }
    }
    return false;
  }

  key() {
    let allKey = [];
    for (let i = 0; i < this.table.length; i++) {
      const table = this.table[i];
      for (let j = 0; j < table.length; j++) {
        const [storedKey] = table[j];
        allKey.push(storedKey);
      }
    }
    return allKey;
  }

  value() {
    let allValue = [];
    for (let i = 0; i < this.table.length; i++) {
      const table = this.table[i];
      for (let j = 0; j < table.length; j++) {
        const [, storedValue] = table[j];
        allValue.push(storedValue);
      }
    }
    return allValue;
  }
  rehash() {
    this.count = 0;
    let oldTable = this.table
    this.table = new Array(this.table.length * 2)
    for (let table of oldTable) {
      if (table) {
        for (let [key, value] of table) {
          this.set(key, value)
        }
      }
    }

  }

  print() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i].length > 0) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const hash = new HashTable(4);
hash.set("name", "Ahamed");
hash.set("mane", "player");
hash.set("age", 23);
hash.set(123, "lalu");
hash.remove("name");
// hash.print()
// console.log(hash.containsValue('player'));
// console.log(hash.key());
// console.log(hash.value());

console.log(hash.table);
