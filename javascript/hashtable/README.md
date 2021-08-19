# Hashtables

A Hashtable uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found


## Challenge

create Hashtable class with basic methods


## Approach & Efficiency

HashTable class contain a hash function to create an index after that adding value with the key in giving bucket and return value depends on key. with Big O:

* time:O(1)
* space:O(1)

## API

* `add`: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.

* `get`: takes in the key and returns the value from the table.

* `contains`: takes in the key and returns a boolean, indicating if the key exists in the table already.

* `hash`: takes in an arbitrary key and returns an index in the collection.


<!-- # UML : -->

