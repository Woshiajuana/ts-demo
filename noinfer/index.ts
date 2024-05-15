
function createStreetLight<C extends string>(
  colors: C[],
  defaultColor?: NoInfer<C>,
) {
  // ...
}

function checkLevel<T extends string>(levels: T[], defaultLevel?: T) {}

checkLevel(["admin", "user"], "hell");


type MyNonInfer<T> = [T][T extends any ? 0 : never];

type TT<T> = T extends any ? 0 : never

type T1 = TT<string>

function checkLevel2<T extends string>(
    levels: T[],
    defaultLevel?: MyNonInfer<T>
) {}

checkLevel2(["admin", "user"], "hell1");


type ThisParameterType2<T> = ThisParameterType<T>

type OmitThisParameter2<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T;

type ThisType2<Type>  = ThisType<Type>