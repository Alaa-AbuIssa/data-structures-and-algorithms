'use strict';

// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }


// /// linked list
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   insert(value) {
//     try {

//       let node = new Node(value);
//       if (!this.head) {
//         this.head = node;
//       } else {
//         node.next = this.head;
//         this.head = node;
//       }
//     } catch {
//       console.log('Please enter a valid input');
//     }
//   }

//   includes(value) {
//     try {

//       let pointer = this.head;
//       if (!this.head) {
//         return false;
//       } else {

//         while (pointer.next) {
//           if (pointer.value == value) {
//             return true;
//           }
//           pointer = pointer.next;

//           if (pointer.next == null && value == pointer.value) {
//             return true;
//           }
//         }
//         return false;
//       }
//     } catch {
//       console.log('Please enter a valid input');
//     }
//   }

//   toString() {
//     try {

//       let string = '';
//       let pointer = this.head;

//       while (pointer.next) {
//         if (pointer.value == null || pointer.value == undefined) {
//           string = string + `NULL -> `;
//         } else {

//           string = string + `{${pointer.value}} -> `
//         }
//         pointer = pointer.next;
//         if (pointer.next == null) {
//           string = string + `{${pointer.value}}`
//         }
//       }

//       return string;
//     } catch {
//       console.log('An error occured');
//     }

//   }

//   append(value) {
//     const node = new Node(value);
//     if (!this.head) {
//       this.head = node;
//     } else {
//       let pointer = this.head;
//       while (pointer.next) {
//         pointer = pointer.next;
//       }
//       pointer.next = node;
//     }
//   }

//   insertBefore(newValue, value) {
//     const node = new Node(newValue);
//     let pointer = this.head;

//     if (value == this.head.value) {
//       node.next = this.head;
//       this.head = node;
//     } else {

//       while (pointer) {
//         if (pointer.next.value == value) {
//           node.next = pointer.next;
//           pointer.next = node;
//           break;
//         }
//         pointer = pointer.next;
//       }
//     }
//   }


//   insertAfter(newValue, value) {
//     let node = new Node(newValue);
//     let pointer = this.head;

//     while (pointer) {

//       if (pointer.value == value) {
//         node.next = pointer.next;
//         pointer.next = node;
//         break;
//       }
//       pointer = pointer.next;
//     }
//   }


//   /// kth
//   kthFromEnd(k){

//     let pointer=this.head;
//     let array = [];

//    while(pointer){
//      array.push(pointer.value);
//      pointer = pointer.next;
//    }
//   if (array.length <= k || k < 0){
//     return 'Exception';
//   } else {
//     return array[array.length-1-k]
//   }
//   }
// }

// /// zipLists...-


// function zipLists(list1,list2){
//   let pointer1 = list1.head;
//   let pointer2 = list2.head;
//   let list3 = new LinkedList();

//   while(pointer1 || pointer2){
//     if(pointer1 != null){
//       list3.append(pointer1.value);
//     pointer1 = pointer1.next;
//     }
//     if(pointer2 != null){
//       list3.append(pointer2.value);
//     pointer2 = pointer2.next;
//     }
//   }
//   return list3.toString();
// }

// module.exports = {LinkedList, zipLists};



class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insert(value) {
    this.size++;
    if (!this.head) {
      this.head = new Node(value);
    } else {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;

    }
  }

  includes(value) {
    let ifInclude = false;

    let current = this.head;
    while (current) {
      if (current.value === value) {
        ifInclude = true;
        return true;
      } else {
        current = current.next;
      }
    }
    return ifInclude;
  }
  append(value) {
    this.size++;
    if (!this.head) {
      this.head = new Node(value);

    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;


      }
      current.next = new Node(value);
    }


  }
  insertBefore(value, newVal) {
    if (this.includes(value)) {
      let current = this.head;
      let newNode = new Node(newVal);

      if (current.value === value) {
        this.insert(newVal);

      } else {
        this.size++;
        while (current) {
          if (current.next.value === value) {
            newNode.next = current.next;
            current.next = newNode;

            return true;
          }
          current = current.next;
        }
      }

    }


  }

  insertAfter(value, newVal) {
    if (this.includes(value)) {
      let current = this.head;
      let newNode = new Node(newVal);
      this.size++;

      while (current) {
        if (current.value === value) {
          newNode.next = current.next;
          current.next = newNode;
          return true;
        }

        current = current.next;
      }


    }

  }
  kthFromEnd(k) {
    if (k < this.size && k >= 0) {
      let current = this.head;
      for (let i = 0; i < (this.size - k - 1); i++) {
        current = current.next;
      }
      return current.value;
    } else {
      return 'Exception';
    }

  }

  toString() {
    let current = this.head;
    let result = '';
    while (current) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }
    result += `NULL`;
    return result;
  }

}

module.exports = {
  Node,
  LinkedList
};
