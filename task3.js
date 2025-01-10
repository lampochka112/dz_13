const isInRange = (x) => x >= 0 && x <= 9;

// Примеры использования
console.log(isInRange(0));  // true
console.log(isInRange(3));  // true
console.log(isInRange(9));  // true
console.log(isInRange(-1)); // false
console.log(isInRange(10)); // false
