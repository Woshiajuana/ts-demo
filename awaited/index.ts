export {}

type T1 = Promise<string>

type T2 = Awaited<T1>


type R = Record<string, any>

type K = keyof any

type Record2<K extends string | number, T> = {
  [P in K as `get`]: T
}

type R2 = Record2<string, any>

const r: R2 = {
  get: '1'
}

type Parameters2<T extends (...args: any[]) => any> = T extends (...args: infer P)=> any ? P : never

type P1 =  Parameters<(a: string, b: number) => void>
type P2 =  Parameters2<(a: string, b: number) => void>

type ReturnType2<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never

type InstanceType2<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : never
