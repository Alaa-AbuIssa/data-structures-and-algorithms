const { Node, LinkedList } = require('../linked-list/index')

class HashTable {
  constructor(size) {

    this.size=size
    this.table = new Array(size);
  }


  add(key, value) {
    let hash = this.hash(key);

    if (!this.table[hash]) {
      this.table[hash] = new LinkedList();
    }
    this.table[hash].insert({ key, value });

  }

  hash(key) {
   let sumCharCode= key.split("").reduce((acc,char)=>{
     return acc + char.charCodeAt(0);
   },0);
   let hash = (sumCharCode * 19) % this.size;
   return hash;
  }



  contains(key){
    let index = this.hash(key);
    let bucket = this.table[index];
    if(!bucket) return false;
    let current=bucket.head;

    while (current) {
      if (current.value.key===key) return  true;
      current=current.next;

    }
    return false;
  }


  get(key) {

    let empty = null;

    if (!this.contains(key)) return empty;

    let index = this.hash(key)
    let bucket = this.table[index];
    let current = bucket.head;

    while (current) {
      if (current.value.key === key) return current.value.value;
      current = current.next;
    }
    return empty;

  }

}

module.exports={HashTable,Node,LinkedList}


