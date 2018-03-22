import { UUIDUtil } from "../../core/util/uuid.util";
/**
 * 注册模型
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-13
 * @version    : v1.0
 */
export var DriverRegister = (function () {
    function DriverRegister() {
    }
    /**
     * 生成图片名字规则，
     * @param identify 标识 如：身份证正面
     * @returns {string}
     */
    DriverRegister.generateImageName = function (identify) {
        // 生成uuid
        var uuid = UUIDUtil.generateUuid();
        // 获取时间戳，截取前10位
        var timeStamp = new Date().getTime().toString().substr(0, 10);
        return identify + DriverRegister.photoSpliter + btoa(timeStamp + DriverRegister.photoSpliter + uuid);
    };
    // 图片签名时名字中的分隔符
    DriverRegister.photoSpliter = ":";
    // 照片名字定义，上传时带相关定义
    DriverRegister.photoPersonalIdentify = "personalPhoto";
    DriverRegister.photoIdCardFrontIdentify = "idCardPicFront";
    DriverRegister.photoIdCardRearIdentify = "driveLicensePicRear";
    DriverRegister.photoDriveLicenseFrontIdentify = "driveLicensePicFront";
    DriverRegister.photoDriveLicenseRearIdentify = "driveLicensePicRear";
    // static readonly photoCommercialInsuranceFrontIdentify = "driveLicensePicRear";
    DriverRegister.photoCommercialInsuranceFrontIdentify = "commercialInsurancePicFront";
    DriverRegister.photoCarFrontIdentify = "vehiclePicFront";
    DriverRegister.photoCarRearIdentify = "vehiclePicRear";
    return DriverRegister;
}());
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/driver/register/driver-register.model.js.map