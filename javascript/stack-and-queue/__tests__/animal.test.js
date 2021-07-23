const AnimalShelter = require('../fifo-animal-shelter.js');

let shelter = new AnimalShelter();

describe('Animal shelter testing', () => {

    test('add new cat to the shelter', () => {
        let tomas = {
            type: 'cat',
            name: 'Tomas'
        }
        shelter.enqueue(tomas);
        expect(shelter.cats.front.value.name).toEqual('Tomas');
    });
    test('add new dog to the shelter', () => {
        let rex = {
            type: 'dog',
            name: 'Rex'
        }
        shelter.enqueue(rex);
        expect(shelter.dogs.front.value.name).toEqual('Rex');
    });

    //add a new animal 
    test('add new animal to the shelter', () => {
        let bird = {
            type: 'bird',
            name: 'nono'
        }
        expect(shelter.enqueue(bird)).toEqual('dogs or cats only');
    });
    test('remove dog from the shelter', () => {

        let dog = shelter.dequeue('dog');
        expect(dog.name).toEqual('Rex');
    });


})

