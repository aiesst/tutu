//错误配置
export class ErrorConfig {

    static readonly userIsExistError: Error = new Error("该用户已经注册过了");
    static readonly unknowError: Error = new Error("未知错误");
    static readonly timeoutError: Error = new Error("超时错误");
    static readonly cacheTimoutError:Error = new Error("缓存过期");
}
