/* eslint-disable no-console */
let arr1: readonly [x:number, y?:boolean] = [1, false]
// arr1.push(1)
let arr2 = [1, 2] as const

enum Enum1 {
  fail,
  success,
}

// console.log(Enum1.fail)
// console.log(Enum1[0])

type t1 = 1 extends String ? 1 : 0
type A = '唱' | '跳' | 'rap'
function kun(value: A) {
  switch (value) {
    case '唱':
      break
    case '跳':
      break
    case 'rap':
      break
    default:
      // eslint-disable-next-line no-case-declarations
      const error: never = value
      break
  }
}

let sy1 = Symbol('1')
let sy2 = Symbol('2')
console.log(sy1, sy2)

namespace Tuple1 {
  export const t1 = '元祖文件'
}
namespace Tuple2 {
  export const t1 = '元祖文件2'
}
