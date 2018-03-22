import { isNullOrUndefined } from "util";
/**
 * 登录
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-18
 * @version    : v1.0
 */
export var HttpAccount = (function () {
    function HttpAccount(userName, userToken, expire) {
        this.userName = userName;
        this.userToken = userToken;
        this.expire = expire;
    }
    /**
     *转成毫秒级别
     * @param account
     * @returns {number}
     */
    HttpAccount.expireMs = function (account) {
        return account.expire * 1000;
    };
    /**
     * 转成秒级别
     * @param account
     * @returns {number}
     */
    HttpAccount.expireSec = function (account) {
        return account.expire;
    };
    Object.defineProperty(HttpAccount.prototype, "expireSec", {
        /**
         * 秒级
         * @returns {number}
         */
        get: function () {
            return this.expire;
        },
        enumerable: true,
        configurable: true
    });
    HttpAccount.isInfinityExpire = function (expire) {
        return expire == HttpAccount.infinityExpire || isNullOrUndefined(expire);
    };
    HttpAccount.infinityExpire = -1;
    return HttpAccount;
}());
//# sourceMappingURL=/Users/ychostMac/Desktop/web_front/src/src/app/core/account/account.model.js.map