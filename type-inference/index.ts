let foo = [1, "hello", true];  // 类型是什么？
foo.push("world");  // 类型会如何变化？
foo[1] = 42;  // 这样会报错吗？

interface Animal  {
  name: string;
  eat(): void;
}

interface Animal {
  sleep(): void;
}

const dog: Animal = {
  name: 'Dog',
  eat() {
      console.log('Eating');
  },
  sleep() {
      console.log('Sleeping');
  }
};

export {}


type ReadonlyKeys<T, K extends keyof T> = {
  readonly [P in K]: T[P];
} & Omit<T, K>;

interface User {
  name: string;
  age: number;
  email: string;
}

const user: ReadonlyKeys<User, 'name' | 'email'> = {
  name: 'John',
  age: 30,
  email: 'john@example.com'
};

// 下面的代码应该报错
user.age = 1;