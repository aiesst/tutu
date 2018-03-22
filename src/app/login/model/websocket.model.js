"use strict";
var util_1 = require("util");
var weixin_config_1 = require("../../shared/config/weixin.config");
/**
 * 微信二维码地址生成
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 17/1/19
 * @version    : v1.0
 */
var WSocketData = (function () {
    function WSocketData() {
    }
    WSocketData.getWeixinUrl = function (wxState) {
        if (!util_1.isNullOrUndefined(wxState)) {
            return weixin_config_1.WeixinConfig.getUrlByState(wxState);
        }
        return null;
    };
    WSocketData.getHttpAccount = function (uesrName, userToken, expire) {
        var httpAccount;
        httpAccount.userName = uesrName;
        httpAccount.userToken = userToken;
        httpAccount.expire = +expire;
        return httpAccount;
    };
    WSocketData.weixinQrcodeType = "QrCodeType";
    WSocketData.userTokenType = "UserTokenType";
    return WSocketData;
}());
exports.WSocketData = WSocketData;
