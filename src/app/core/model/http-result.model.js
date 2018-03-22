"use strict";
/**
 * 与服务端的交互协议
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-16
 * @version    : v1.0
 */
var HttpResult = (function () {
    function HttpResult() {
    }
    return HttpResult;
}());
exports.HttpResult = HttpResult;
/**
 * 服务器状态
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-16
 * @version    : v1.0
 */
var HttpCode = (function () {
    function HttpCode() {
    }
    return HttpCode;
}());
HttpCode.ok = 0;
HttpCode.error = -1;
HttpCode.userIsExist = 4;
exports.HttpCode = HttpCode;
