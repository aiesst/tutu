import { isNullOrUndefined } from "util";
import { WeixinConfig } from "../../shared/config/weixin.config";
/**
 * 微信二维码地址生成
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 17/1/19
 * @version    : v1.0
 */
export var WSocketData = (function () {
    function WSocketData() {
    }
    WSocketData.getWeixinUrl = function (wxState) {
        if (!isNullOrUndefined(wxState)) {
            return WeixinConfig.getUrlByState(wxState);
        }
        return null;
    };
    WSocketData.weixinQrcodeType = "QrCodeType";
    WSocketData.userTokenType = "UserTokenType";
    return WSocketData;
}());
//# sourceMappingURL=/Users/ychostMac/Desktop/web_front/src/src/app/login/model/websocket.model.js.map