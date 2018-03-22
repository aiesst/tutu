import {
    Component, ViewChild, AfterViewInit, AfterViewChecked, ElementRef,
    AfterContentInit, ViewChildren, ChangeDetectorRef, OnDestroy
} from "@angular/core";
import {DriverRegister} from "./driver-register.model";
import {HTMLOption} from "../../core/model/html-option.model";
import {NgForm} from "@angular/forms";
import {DriverRegisterValidate} from "./register.validate";
import {DriverRegisterService} from "./register.service";
import {LoggerService} from "../../core/service/logger.service";
import {PageService} from "../../core/service/page.service";
import {OssImgUploadComponent, OssImgUploadEvent} from "../../shared/component/img-upload/img-upload.component";
import {PhoneNumberValidator} from "../../shared/validator/phone-number.validator";
import {Router} from "@angular/router";
import {AppRouter} from "../../app-routing.module";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'app-driver-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css', './register.form.css'],
    providers: [DriverRegisterValidate]
})


export class DriverRegisterComponent implements AfterViewInit,OnDestroy {
    ngOnDestroy(): void {
        this.pageService.clearBackground();
    }

    @ViewChildren(OssImgUploadComponent)
    imgUploadComArray: Array<OssImgUploadComponent>;

    //form表单
    @ViewChild('regForm') private currentForm: NgForm;
    regForm: NgForm;

    //表单数据模型
    private driverModel: DriverRegister = new DriverRegister();
    private disableGetCaptchaBtn: boolean;
    //验证码是否错误
    private captchaIsOk: boolean = false;

    //<select>选项框数据
    carProperties: HTMLOption[];
    carTypes: HTMLOption[];
    motorcycleTypes: HTMLOption[];
    //步骤
    currentStep: number;
    debug: boolean = true;
    //表单错误和formControl的name一致
    //例如必须含有 <input #phoneNumber="ngModel">
    formErrors = this.validate.formErrors;
    //验证提示,phoneNumber名字和<input> formError一致
    validateMessage = this.validate.validateMessage;


    constructor(private  pageService: PageService,
                private logger: LoggerService,
                private registerService: DriverRegisterService,
                private validate: DriverRegisterValidate,
                private router:Router,
                private cd: ChangeDetectorRef) {

        this.currentStep = 1;
        this.disableGetCaptchaBtn = false;

    }


    /**
     * 是时候表单数据，图片上传插件，背景图片等等
     */
    ngAfterViewInit(): void {
        this.initSelectData();
        this.initFormChangeEvent();
        this.pageService.setBackground("driver.jpg");

    }

    /**
     * 初始化oss图片上传插件
     */
    private initImgUpload() {
        if (!PhoneNumberValidator.phoneNumberIsValid(this.driverModel.phoneNumber)) {
            return;
        }
        this.registerService.getOssAccessParam(this.driverModel.phoneNumber).subscribe(ossParam => {
            //补全http
            if (!ossParam.url.startsWith("http://") || !ossParam.url.startsWith("http://") ) {
                if(!environment.production){
                    ossParam.url = "http://" + ossParam.url;
                }else {
                    ossParam.url = "https://" + ossParam.url;

                }
            }
            //初始化图片上传插件
            this.imgUploadComArray.forEach(item => item.initByOssParam(ossParam));

        });

    }

    /**
     * 图片上传成功的回调
     * @param event
     */
    onImgUploadSuccess(event: OssImgUploadEvent) {
        this.logger.log("上传成功", event);
        let imgName = event.imgName;

        if (imgName.startsWith(this.photoPersonalStr)) {
            this.driverModel.photoPersonal = imgName;
        } else if (imgName.startsWith(this.photoIdCardFrontStr)) {
            this.driverModel.photoIdCardFront = imgName;
        } else if (imgName.startsWith(this.photoIdCardRearStr)) {
            this.driverModel.photoIdCardRear = imgName;
        } else if (imgName.startsWith(this.photoCarFrontStr)) {
            this.driverModel.photoCarFront = imgName;
        } else if (imgName.startsWith(this.photoCarRearStr)) {
            this.driverModel.photoIdCardRear = imgName;
        } else if (imgName.startsWith(this.photoCommercialInsuranceFrontStr)) {
            this.driverModel.photoCommercialInsuranceFront = imgName;
        } else if (imgName.startsWith(this.photoDriveLicenseFrontStr)) {
            this.driverModel.photoDriveLicenseFront = imgName;
        } else if (imgName.startsWith(this.photoDriveLicenseRearStr)) {
            this.driverModel.photoDriveLicenseRear = imgName;
        } else {
            this.logger.log("oss图片上传没有配名字", event);
        }
    }

    /**
     * 图片上传失败的回调
     * @param event
     */
    onImgUploadError(event: OssImgUploadEvent) {
        this.logger.log("上传失败", event);
    }

    /**
     * 初始化注册的选项数据
     */
    initSelectData(): void {


        this.motorcycleTypes = [{
            trueValue: "宝马",
            showValue: "宝马",
        }, {
            trueValue: "奔驰",
            showValue: "奔驰"
        }, {
            trueValue: "本田",
            showValue: "本田"
        }, {
            trueValue: "标致",
            showValue: "标致"
        }, {
            trueValue: "大发",
            showValue: "大发"
        }, {
            trueValue: "大宇",
            showValue: "大宇"
        }, {
            trueValue: "大众",
            showValue: "大众"
        }, {
            trueValue: "道奇",
            showValue: "道奇"
        }, {
            trueValue: "丰田",
            showValue: "丰田"
        }, {
            trueValue: "北京",
            showValue: "北京"
        }, {
            trueValue: "福特",
            showValue: "福特"
        }, {
            trueValue: "福田",
            showValue: "福田"
        }, {
            trueValue: "吉普",
            showValue: "吉普"
        }, {
            trueValue: "江铃",
            showValue: "江铃"
        }, {
            trueValue: "富奇",
            showValue: "富奇"
        }, {
            trueValue: "悍马",
            showValue: "悍马"
        }, {
            trueValue: "解放",
            showValue: "解放"
        }, {
            trueValue: "拉达",
            showValue: "拉达"
        },{
            trueValue: "悍马",
            showValue: "悍马"
        }, {
            trueValue: "铃木",
            showValue: "铃木"
        }, {
            trueValue: "丰田",
            showValue: "丰田"
        }, {
            trueValue: "陆虎",
            showValue: "陆虎"
        }, {
            trueValue: "福特",
            showValue: "福特"
        }, {
            trueValue: "马自达",
            showValue: "马自达"
        }];

        this.carTypes = [{
            trueValue: "大",
            showValue: "大"
        }, {
            trueValue: "中",
            showValue: "中"
        }, {
            trueValue: "小",
            showValue: "小"
        }];

        this.carProperties =
            [{
                trueValue: "非运营车",
                showValue: "非运营车",
            }, {
                trueValue: "租赁车",
                showValue: "租赁车"
            }];
        this.driverModel.sex = "1";
        this.driverModel.motorcycleType = this.motorcycleTypes[0].trueValue;
        this.driverModel.carType = this.carTypes[0].trueValue;
        this.driverModel.carProperty = this.carProperties[0].trueValue;
        this.driverModel.passengerNum = "4";
        // this.driverModel.passengerNum = "4";
        // this.driverModel.idCard = "513021199310013154";
        // this.driverModel.name = "小黄";
        // this.driverModel.businessNum = "112211";
        // this.driverModel.carType = "大";
        // this.driverModel.carProperty = "非运营车";
        // this.driverModel.motorcycleType = "宝马";
        // this.driverModel.carLicenseNum = "川A12345";
        // this.driverModel.phoneNumber = "18380461672";
    }


    /**
     * 订阅表单数据改变事件
     */
    initFormChangeEvent(): void {
        if (this.currentForm == this.regForm) {
            return;
        }
        this.regForm = this.currentForm;
        if (this.regForm) {
            this.regForm.valueChanges
                .subscribe(data => this.onFormValueChanged(data));
        }
    }

    /**
     * 表单数据改变时对表单数据进行校验
     * @param data 表单数据
     */
    onFormValueChanged(data?: any): void {
        if (!this.regForm) {
            return;
        }
        const form = this.regForm.form;

        for (const field in this.formErrors) {
            //清空先前的错误
            this.formErrors[field] = [];
            const control = form.get(field);
            //更新错误消息
            if (control && control.dirty && !control.valid) {
                const message = this.validateMessage[field];
                for (const key in control.errors) {
                    this.formErrors[field].push(message[key]);
                }
            }
        }
    }


    /**
     * 按钮点击的下一步
     */
    nextStep(): void {
        if (this.currentStep == 2) {
            this.initImgUpload();

        }

        if (++this.currentStep > 3) {
            this.currentStep = 0;
        }
    }

    /**
     * 按钮点击的上一步
     */
    previousStep(): void {
        if (--this.currentStep < 1) {
            this.currentStep = 1;
        }
    }

    /**
     * 验证码获取之后的提示框
     */
    getCaptcha(): void {
        this.registerService.getCaptcha(this.driverModel.phoneNumber)
            .subscribe(isOk => {
                    if (isOk) {
                        swal(
                            '获取验证码成功',
                            '',
                            'success'
                        );

                        this.disableGetCaptchaBtn = true;
                    }else{
                        swal(
                            '获取验证码失败',
                            '',
                            'error'
                        )
                    }
                },
                error => {
                    swal(
                        error.message,
                        '',
                        'error'
                    )
                }

            );
    }

    checkCaptcha(): void {

        if (this.driverModel.captcha.length != 6 || !PhoneNumberValidator.phoneNumberIsValid(this.driverModel.phoneNumber)) {
            this.captchaIsOk = false;

            return;
        }
        this.registerService.checkCaptcha(this.driverModel.phoneNumber, this.driverModel.captcha)
            .subscribe(isOk =>  {  this.captchaIsOk = isOk; }, error => this.captchaIsOk = false);
    }

    submitDriverModel() {
        this.logger.log("注册数据", this.driverModel);
        this.registerService.submitDriverRegisterData(this.driverModel).subscribe(data => {
            swal(
                '注册成功',
                '',
                'success'
            ).then(()=>{
                this.router.navigate([AppRouter.home]);
            });

        }, error => this.logger.error("注册失败", error));
    }


    photoPersonalStr: string = DriverRegister.generateImageName(DriverRegister.photoPersonalIdentify);
    photoIdCardFrontStr: string = DriverRegister.generateImageName(DriverRegister.photoIdCardFrontIdentify);
    photoIdCardRearStr: string = DriverRegister.generateImageName(DriverRegister.photoIdCardRearIdentify);
    photoDriveLicenseFrontStr: string = DriverRegister.generateImageName(DriverRegister.photoDriveLicenseFrontIdentify);
    photoCommercialInsuranceFrontStr: string = DriverRegister.generateImageName(DriverRegister.photoCommercialInsuranceFrontIdentify);
    photoCarFrontStr: string = DriverRegister.generateImageName(DriverRegister.photoCarFrontIdentify);
    photoCarRearStr: string = DriverRegister.generateImageName(DriverRegister.photoCarRearIdentify);
    photoDriveLicenseRearStr: string = DriverRegister.generateImageName(DriverRegister.photoDriveLicenseRearIdentify)


}
