export var WeixinConfig = (function () {
    function WeixinConfig() {
    }
    /**
     * 通过State切换登录模式，比如扫码登录
     * @param state
     * @returns {string}
     */
    WeixinConfig.getUrlByState = function (state) {
        return "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
            WeixinConfig.appId +
            "&redirect_uri=https%3a%2f%2f" +
            WeixinConfig.callbackUrl +
            "&response_type=code&scope=snsapi_userinfo&state=" +
            state +
            "&connect_redirect=1#wechat_redirect";
    };
    /**
     * 微信直接登录Url
     * @returns {string}
     */
    WeixinConfig.getDirectUrl = function () {
        return WeixinConfig.getUrlByState(WeixinConfig.directState);
    };
    WeixinConfig.directState = "-1";
    WeixinConfig.appId = "wx366274c96302b860";
    WeixinConfig.callbackUrl = "www.tutufree.com";
    return WeixinConfig;
}());
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/shared/config/weixin.config.js.map