const enum Demo1 {
  A = 'a',
  B = 'b',
}

enum Demo2 {
  A = 'a',
  B = 'b',
}

console.log('Demo1 A => ', Demo1.A)
console.log('Demo2 A => ', Demo2.A)


const x = 1

const enum Demo3{
  A = 1,
  B = A * 2,
  C = x * 3 // error const enum member initializers can only contain literal values and other computed enum values.
}
console.log('Demo3 B => ', Demo3.B)

enum Demo4 {
  A = 1,
  B = A * 2,
  C = x * 3
}