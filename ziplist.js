/**
 * File for Experience 27
 * Created by Keanu on 9/19/16.
 */

function zipList(list1, list2) {
  let zipped = [];

  for(let i = 0; i < list1.length; i++) {
    zipped[(i * 2)] = list1[i];
    zipped[(i * 2) + 1] = list2[i];
  }

  return zipped;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

const test1 = [1, 2, 3, 4];
const test2 = ['a', 'b', 'c', 'd'];

console.log(zipList(test1, test2));
console.log(zipListTheSimpleWay(test1, test2));
