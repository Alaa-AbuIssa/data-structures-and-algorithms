'use strict';

let { HashTable } = require('../hashtable');

describe('HashTable Tests', () => {
  const hashTable = new HashTable(1)
  it('"Adding a key/value to the hashtable results in the value being in the data structure', () => {
    hashTable.add("alaa", "0799");
    let expected = [{ "head": { "next": null, "value": { "key": "alaa", "value": "0799" } }, "size": 1 }]
    expect(hashTable.table).toEqual(expect.arrayContaining(expected))
  })


  it("Retrieving based on a key returns the value stored", () => {
    hashTable.get('alaa')
    let expected = '0799';
    expect(hashTable.get('alaa')).toEqual(expected)

  })

  it("Successfully returns null for a key that does not exist in the hashtable", () => {
    expect(hashTable.get('test')).toBeNull();
  })


  it("Successfully handle a collision within the hashtable", () => {
    hashTable.add('ahmad', '0799');
    let expected = [{ "head": { "next": { "next": null, "value": { "key": "alaa", "value": "0799" } }, "value": { "key": "ahmad", "value": "0799" }  }, "size": 2 }];
    expect(hashTable.table).toEqual(expect.arrayContaining(expected))
  })



  it("Successfully retrieve a value from a bucket within the hashtable that has a collision", () => {
    hashTable.add('ahmad', '0788');
    let expected = [{ "head": { "next": { "next": null, "value": { "key": "alaa", "value": "0788" } }, "value": { "key": "ahmad", "value": "0799" } }, "size": 2 }];
    expect(hashTable.get('ahmad')).toEqual("0788")
  })


  it("Successfully hash a key to an in-range value", ()=>{
    expect(hashTable.hash("test")).toBeLessThan(1);
    expect(hashTable.hash("alaa")).toBeLessThan(1)
  })
})
