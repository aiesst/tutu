import {Http, URLSearchParams} from "@angular/http";
import {OssService} from "../../core/service/oss.service";
import {Injectable} from "@angular/core";
import {LoggerService} from "../../core/service/logger.service";
import {Observable, Observer} from "rxjs";
import {OSSAccessParam} from "../../core/model/oss-access-param.model";
import {RxService} from "../../core/service/rx-service";
import {RestfulServerRouter} from "../../shared/config/http/http-router.config";
import {HttpCode} from "../../core/model/http-result.model";
import {ok} from "assert";
import {PhoneNumberValidator} from "../../shared/validator/phone-number.validator";
import {UUIDUtil} from "../../core/util/uuid.util";
import {DriverRegister} from "./driver-register.model";
/**
 * 司机注册服务，主要向Oss上传图片，以及向服务器拿token
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-16
 * @version    : v1.0
 */
@Injectable()
export class DriverRegisterService {
    constructor(private http: Http,
                private logger: LoggerService,
                private ossService: OssService,
                private rxService: RxService) {


    }


    /**
     * 获取接入 Oss 的凭据
     * @param phoneNumber
     * @returns {Observable<OSSAccessParam>}
     */
    getOssAccessParam(phoneNumber: string): Observable<OSSAccessParam> {
        return this.ossService.getOssAccessParam(phoneNumber);
    }


    getCaptcha(phoneNumber: string): Observable<boolean> {

        let params: URLSearchParams = new URLSearchParams();
        params.set("phoneNum", phoneNumber);
        return this.http.get(RestfulServerRouter.getPhoneCaptcha, {
            search: params
        }).map(this.rxService.httpResultMap).map(result => {
            if(result.resultCode == HttpCode.ok){
                return true;
            }else if(result.resultCode == HttpCode.userIsExist){
                throw new Error("您已经注册了，请勿重复需注册");
            }else{
                throw new Error("获取验证码失败");
            }

        });


        // return this.rxService.makeObservable((observer: Observer<boolean>) => {
        //
        //   let params: URLSearchParams = new URLSearchParams();
        //   params.set("phoneNum", phoneNumber);
        //
        //   if(!PhoneNumberValidator.phoneNumberIsValid(phoneNumber)){
        //       observer.error("手机号码有误！");
        //   }
        //
        //   this.http.get(RestfulServerRouter.checkUserExist, {search: params})
        //     .map(this.rxService.httpResultMap).flatMap(result => {
        //     switch (result.resultCode) {
        //       //用户首次注册
        //       case HttpCode.ok:
        //       return  this.http.get(RestfulServerRouter.getPhoneCaptcha, {
        //           search: params
        //         }).map(this.rxService.httpResultMap).map(result => {
        //           return result.resultCode == HttpCode.ok;
        //         });
        //
        //
        //       //用户已经注册了
        //       case HttpCode.userIsExist:
        //         observer.error("您已经注册了，请勿重复需注册");
        //         break;
        //
        //       //系统错误
        //       default:
        //         observer.error(result.resultMsg);
        //         break;
        //
        //     }
        //   }).subscribe(observer);
        // })
    }


    checkCaptcha(phoneNum: string, captcha: string): Observable<boolean> {
        let params: URLSearchParams = new URLSearchParams();
        params.set("phoneNum", phoneNum);
        params.set("captcha", captcha);
        return this.http.get(RestfulServerRouter.checkCaptcha, {search: params})
            .map(this.rxService.httpSignalDataMap).map(data => {this.logger.log("获取的数据",data);return data=="Succ"});
    }

    submitDriverRegisterData(register:DriverRegister):Observable<boolean>{

         return this.http.post(RestfulServerRouter.driverRegister,register).map(this.rxService.httpSignalDataMap)
             .map(data=> true);
    }

}

