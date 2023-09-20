interface IPerson {
  readonly name: string
  age?: number
}
let p1: IPerson = { name: 'zs' }
// p1.name = 'ls'

interface IO1 {
  names: string[]
}
function fn(this: IO1) {
  this.names.push('1')
}

function findNum(): number[]
function findNum(index: number): number[]
function findNum(ids: number[]): number[]
function findNum(ids?: number | number[]) {
  let arrs = [1, 2, 3]
  if (!ids)
    return arrs
  if (typeof ids === 'number')
    return arrs[ids]

  arrs.concat(ids)
  return arrs
}
