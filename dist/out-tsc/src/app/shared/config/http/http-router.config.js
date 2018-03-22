/**
 * 服务器路由
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-10
 * @version    : v1.0
 */
export var RestfulServerRouter = (function () {
    function RestfulServerRouter() {
    }
    /**
     * 因为string是不可变的，所以需要手动更新，主要是为了自动切换localBaseUrl与remoteBaseUrl，见DebugService
     */
    RestfulServerRouter.updateRouter = function () {
        RestfulServerRouter.connectUs = RestfulServerRouter.baseUrl + "contact_us";
        RestfulServerRouter.getOssAccessParam = RestfulServerRouter.baseUrl + "get_oss_signature";
        RestfulServerRouter.getPhoneCaptcha = RestfulServerRouter.baseUrl + "get_captcha";
        RestfulServerRouter.checkUserExist = RestfulServerRouter.baseUrl + "get_captcha";
        RestfulServerRouter.getHttpAccountByWeixin = RestfulServerRouter.baseUrl + "user_verify";
        RestfulServerRouter.checkIsLogin = RestfulServerRouter.baseUrl + "check_captcha";
        RestfulServerRouter.travelBooking = RestfulServerRouter.baseUrl + "customization_journey";
        RestfulServerRouter.contactUs = RestfulServerRouter.baseUrl + "contact_us";
        RestfulServerRouter.checkCaptcha = RestfulServerRouter.baseUrl + "check_captcha";
        RestfulServerRouter.driverRegister = RestfulServerRouter.baseUrl + "driver_register";
    };
    RestfulServerRouter.localBaseUrl = "http://localhost:4200/v1/wms/http/";
    RestfulServerRouter.remoteBaseUrl = "https://www.tutufree.com/v1/wms/http/";
    //调试的时候是 localBaseUrl
    RestfulServerRouter.baseUrl = RestfulServerRouter.remoteBaseUrl;
    RestfulServerRouter.baseWsUrl = "wss://www.tutufree.com/v1/";
    RestfulServerRouter.connectUs = RestfulServerRouter.baseUrl + "contact_us";
    // 获取Oss接入参数
    RestfulServerRouter.getOssAccessParam = RestfulServerRouter.baseUrl + "get_oss_signature";
    //获取验证码
    RestfulServerRouter.getPhoneCaptcha = RestfulServerRouter.baseUrl + "get_captcha";
    //检查用户注册情况
    RestfulServerRouter.checkUserExist = RestfulServerRouter.baseUrl + "get_captcha";
    //微信登录
    RestfulServerRouter.getHttpAccountByWeixin = RestfulServerRouter.baseUrl + "user_verify";
    //微信登陆的websocket连接
    RestfulServerRouter.wsLogin = RestfulServerRouter.baseWsUrl + "/wms/web_socket/pre_login";
    //测试登陆专用
    RestfulServerRouter.checkIsLogin = RestfulServerRouter.baseUrl + "check_captcha";
    //行程预定
    RestfulServerRouter.travelBooking = RestfulServerRouter.baseUrl + "customization_journey";
    //联系我们
    RestfulServerRouter.contactUs = RestfulServerRouter.baseUrl + "contact_us";
    RestfulServerRouter.checkCaptcha = RestfulServerRouter.baseUrl + "check_captcha";
    RestfulServerRouter.driverRegister = RestfulServerRouter.baseUrl + "driver_register";
    return RestfulServerRouter;
}());
//# sourceMappingURL=/Users/ychostMac/Desktop/web_front/src/src/app/shared/config/http/http-router.config.js.map