
/**
 * 模块导入守护者，抛出导入失败的异常
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-09
 * @version    : v1.0
 */


export function throwIfAlreadyLoaded(paraentModule:any,moduleName:string){
  if(paraentModule){
    throw new Error(`${moduleName} 已经被加载了。只有 AppModule 能够导入 CoreModule`)
  }
}
