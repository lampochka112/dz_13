const isEvenInRange = (x) => x >= 0 && x <= 10 && x % 2 === 0;

// Примеры использования:
console.log(isEvenInRange(0));  // true
console.log(isEvenInRange(3));  // false
console.log(isEvenInRange(8));  // true
console.log(isEvenInRange(-1)); // false
console.log(isEvenInRange(10)); // true
console.log(isEvenInRange(12)); // false
