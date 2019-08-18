var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, ele) {
  return [ele, ...arr]; // spread operator adds elements without mutating
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  arr.unshift(ele);
  return arr;
}

function addElementToEndOfArray(arr, ele) {
  return [...arr, ele];
}

function destructivelyAddElementToEndOfArray(arr, ele) {
   arr.push(ele);
   return arr;
}

function accessElementInArray(arr, idx) {
  return arr[idx];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift(); // remove first element
  return arr;
}