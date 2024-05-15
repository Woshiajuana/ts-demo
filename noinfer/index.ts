
function createStreetLight<C extends string>(
  colors: C[],
  defaultColor?: NoInfer<C>,
) {
  // ...
}

function checkLevel<T extends string>(levels: T[], defaultLevel?: T) {}

checkLevel(["admin", "user"], "hell");