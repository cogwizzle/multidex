import Multidex from '../multidex';

it('Multidex shall be able to change based on the number of times the index value has been called.', () => {
  let index = new Multidex([1, 9]);
  
  expect(1 == index).toBeTruthy();
  expect(9 == index).toBeTruthy();
});

it('Multidex shall be able to take in a mix of both numbers and string keys.', () => {
  
  let index = new Multidex([1, 'a']);

  expect(1 == index).toBeTruthy();
  expect('a' == index).toBeTruthy();
});

it('Multidex should throw an exception when an index outside of the array of indexes passed in.', () => {

  let index = new Multidex();

  expect(() => {index == 1;}).toThrow(Error);
});

it('Multidex shall be able to reference an index inside of an array or a hashmap.', () => {
  
  let arr = [{test: 'yeah', other: 'no'}, 2, 3, 4];

  let index = new Multidex([0, 'test']);
  expect(arr[index][index]).toEqual('yeah');
});
