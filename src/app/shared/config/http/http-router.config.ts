/**
 * 服务器路由
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-10
 * @version    : v1.0
 */
export class RestfulServerRouter {
    static readonly localBaseUrl: string = "http://localhost:4200/v1/wms/http/";
    static readonly remoteBaseUrl: string = "https://www.tutufree.com/v1/wms/http/";
    //调试的时候是 localBaseUrl
    static baseUrl: string = RestfulServerRouter.remoteBaseUrl;
    private static baseWsUrl: string = "wss://www.tutufree.com/v1/";

    static connectUs: string = RestfulServerRouter.baseUrl + "contact_us";
    // 获取Oss接入参数
    static getOssAccessParam: string = RestfulServerRouter.baseUrl + "get_oss_signature";
    //获取验证码
    static getPhoneCaptcha: string = RestfulServerRouter.baseUrl + "get_captcha";
    //检查用户注册情况
    static checkUserExist: string = RestfulServerRouter.baseUrl + "get_captcha";
    //微信登录
    static getHttpAccountByWeixin: string = RestfulServerRouter.baseUrl + "user_verify";
    //微信登陆的websocket连接
    static wsLogin: string = RestfulServerRouter.baseWsUrl + "/wms/web_socket/pre_login";
    //测试登陆专用
    static checkIsLogin: string = RestfulServerRouter.baseUrl + "check_captcha";
    //行程预定
    static travelBooking: string = RestfulServerRouter.baseUrl + "customization_journey";
    //联系我们
    static contactUs: string = RestfulServerRouter.baseUrl + "contact_us";
    static checkCaptcha:string = RestfulServerRouter.baseUrl +"check_captcha";
    static driverRegister:string = RestfulServerRouter.baseUrl +"driver_register";

    /**
     * 因为string是不可变的，所以需要手动更新，主要是为了自动切换localBaseUrl与remoteBaseUrl，见DebugService
     */
    static updateRouter(): void {
        RestfulServerRouter.connectUs = RestfulServerRouter.baseUrl + "contact_us";
        RestfulServerRouter.getOssAccessParam = RestfulServerRouter.baseUrl + "get_oss_signature";
        RestfulServerRouter.getPhoneCaptcha = RestfulServerRouter.baseUrl + "get_captcha";
        RestfulServerRouter.checkUserExist = RestfulServerRouter.baseUrl + "get_captcha";
        RestfulServerRouter.getHttpAccountByWeixin = RestfulServerRouter.baseUrl + "user_verify";
        RestfulServerRouter.checkIsLogin = RestfulServerRouter.baseUrl + "check_captcha";
        RestfulServerRouter.travelBooking = RestfulServerRouter.baseUrl + "customization_journey";
        RestfulServerRouter.contactUs = RestfulServerRouter.baseUrl + "contact_us";
        RestfulServerRouter.checkCaptcha = RestfulServerRouter.baseUrl +"check_captcha";
        RestfulServerRouter.driverRegister = RestfulServerRouter.baseUrl + "driver_register";
    }

}


