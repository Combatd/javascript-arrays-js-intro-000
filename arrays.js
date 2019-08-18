var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, ele) {
  return [ele, ...arr]; // spread operator adds elements without mutating
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  return arr.unshift(ele);
}

function addElementToEndOfArray(arr, ele) {
  return [...arr, ele];
}