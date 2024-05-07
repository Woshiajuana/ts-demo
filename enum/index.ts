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
  C = x * 3
}

enum Demo4 {
  A = 1,
  B = A * 2,
  C = x * 3
}