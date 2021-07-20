'use strict';

// Node class
class Node{
  constructor(value,next=null){
    this.value=value;
    this.next=next;
    this.length=0;
  }
}

module.exports= Node;
