export function iteratorArray(iteration) {
  const arrayIterator = new Set();
  for (let i = 0; i < iteration; i++) {
    arrayIterator.add(i+1);
  }
  return arrayIterator;
}

export function iteratorObject(name, lastName) {
  const objectIterator = new Map();
  return objectIterator.set(name, lastName);
}