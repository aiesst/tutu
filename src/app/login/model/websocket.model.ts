import {isNullOrUndefined} from "util";
import {RestfulServerRouter} from "../../shared/config/http/http-router.config";
import {HttpAccount} from "../../core/account/account.model";
import {WeixinConfig} from "../../shared/config/weixin.config";

/**
 * 微信二维码地址生成
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 17/1/19
 * @version    : v1.0
 */
export class WSocketData {
    type: string;
    wxState: string;
    userName: string;
    userToken: string;
    expire: string;
    nickName:string;

    static readonly weixinQrcodeType: string = "QrCodeType";
    static readonly userTokenType: string = "UserTokenType";


    static getWeixinUrl(wxState: string): string {
        if (!isNullOrUndefined(wxState)) {
            return WeixinConfig.getUrlByState(wxState);
        }
        return null;
    }



}

