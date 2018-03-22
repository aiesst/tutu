/**
 * 接入Oss的参数
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-16
 * @version    : v1.0
 */
export class OSSAccessParam{

  accessKeyId:string;    //接入Id
  policy:string;         //策略
  dir:string;            //目录，使用的参数应该是 key:dir+$filename
  url:string;            //上传的url
  signature:string;      //签名
  expire:string;         //过期时间(秒)

}
