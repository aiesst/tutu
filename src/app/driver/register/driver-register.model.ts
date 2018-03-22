/**
 * Created by ychost on 2017/1/13.
 */
import {UUIDUtil} from "../../core/util/uuid.util";
/**
 * 注册模型
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-13
 * @version    : v1.0
 */
export class DriverRegister {
    phoneNumber: string;     //手机号
    captcha: string;       //验证码
    name: string;            //姓名
    idCard: string;          //身份证
    sex: string;             //性别
    carLicenseNum: string;   //车牌号
    driverLicense: string;    //驾驶证
    businessNum: string;     //运营证号

    carProperty: string;     //车辆性质
    motorcycleType: string;   //车辆车型：宝马，大众
    carType: string;         //车辆类型：大，中
    passengerNum: string;     //载客量

    photoPersonal: string;                //个人免冠照
    photoIdCardFront: string;           //身份证正面照
    photoIdCardRear: string;            //身份证背面照
    photoDriveLicenseFront: string;   //行驶证正面照
    photoDriveLicenseRear: string;    //行驶证背面照
    photoCommercialInsuranceFront: string;//商业险正面照
    photoCarFront: string;              //车辆正面照
    photoCarRear: string;               //车辆侧面照

    // 图片签名时名字中的分隔符
    static readonly photoSpliter: string = ":";

    // 照片名字定义，上传时带相关定义
    static readonly photoPersonalIdentify = "personalPhoto";
    static readonly photoIdCardFrontIdentify = "idCardPicFront";
    static readonly photoIdCardRearIdentify = "driveLicensePicRear";
    static readonly photoDriveLicenseFrontIdentify = "driveLicensePicFront";
    static readonly photoDriveLicenseRearIdentify = "driveLicensePicRear";
    // static readonly photoCommercialInsuranceFrontIdentify = "driveLicensePicRear";
    static readonly photoCommercialInsuranceFrontIdentify = "commercialInsurancePicFront";
    static readonly photoCarFrontIdentify = "vehiclePicFront";
    static readonly photoCarRearIdentify = "vehiclePicRear";

    /**
     * 生成图片名字规则，
     * @param identify 标识 如：身份证正面
     * @returns {string}
     */
    static generateImageName(identify: string): string {
        // 生成uuid
        let uuid: string = UUIDUtil.generateUuid();
        // 获取时间戳，截取前10位
        let timeStamp: string = new Date().getTime().toString().substr(0, 10);
        return identify + DriverRegister.photoSpliter + btoa(timeStamp + DriverRegister.photoSpliter + uuid);
    }

}
