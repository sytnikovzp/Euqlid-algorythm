'use strict';

function euqlid(a, b) {
  if (
    a <= 0 ||
    b <= 0 ||
    typeof a !== 'number' ||
    typeof b !== 'number' ||
    !Number.isInteger(a) ||
    !Number.isInteger(b)
  )
    return 'Numbers A & B must not be a negative or fractional!';

  if (a % b === 0) {
    return b;
  } else {
    return euqlid(b, a % b);
  }
}

console.log(euqlid(68, 34));
console.log('============');
console.log(euqlid(6.8, 34));
console.log('============');
console.log(euqlid(-68, 34));
console.log('============');
console.log(euqlid('68', 34));
