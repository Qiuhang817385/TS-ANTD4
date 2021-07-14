// declare interface funcAbcSign {
//   (s: string): string
// }

// export declare let abc: funcAbcSign

// 代码能够 import 的方式引入，但是没有办法找到。因为根本没有安装这个玩意。
declare module 'demo' {
  interface funcAbcSign {
    (s: string): string
  }
  export let abc: funcAbcSign
}
