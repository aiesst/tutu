/**
 * 与服务端的交互协议
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-16
 * @version    : v1.0
 */
export class HttpResult<T>{
  resultCode:number;
  resultMsg:string;
  data:Array<T>;
}

/**
 * 服务器状态
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-16
 * @version    : v1.0
 */
export class HttpCode{
  static readonly ok:number = 0;
  static readonly error:number = -1;
  static readonly userIsExist = 4;



}
