/**
 * 抽象类
 * 内部使用abstract关键字定义的方法都只能是描述 而不能进行实现
 */
abstract class Vue {
  name?: string
  constructor(name?: string) {
    this.name = name
  }

  getName(): string | undefined {
    return this.name
  }

  abstract run(limit: number): void
}

export default {
  a: 1,
  b: 2,
}
