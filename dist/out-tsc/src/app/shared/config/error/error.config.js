//错误配置
export var ErrorConfig = (function () {
    function ErrorConfig() {
    }
    ErrorConfig.userIsExistError = new Error("该用户已经注册过了");
    ErrorConfig.unknowError = new Error("未知错误");
    ErrorConfig.timeoutError = new Error("超时错误");
    ErrorConfig.cacheTimoutError = new Error("缓存过期");
    return ErrorConfig;
}());
//# sourceMappingURL=/Users/ychostMac/Desktop/web_front/src/src/app/shared/config/error/error.config.js.map