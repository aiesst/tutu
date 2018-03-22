/**
 * 与服务端的交互协议
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-16
 * @version    : v1.0
 */
export var HttpResult = (function () {
    function HttpResult() {
    }
    return HttpResult;
}());
/**
 * 服务器状态
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-16
 * @version    : v1.0
 */
export var HttpCode = (function () {
    function HttpCode() {
    }
    HttpCode.ok = 0;
    HttpCode.error = -1;
    HttpCode.userIsExist = 4;
    return HttpCode;
}());
//# sourceMappingURL=/Users/ychostMac/Desktop/web_front/src/src/app/core/model/http-result.model.js.map