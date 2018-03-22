"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var driver_register_model_1 = require("./driver-register.model");
var register_validate_1 = require("./register.validate");
var DriverRegisterComponent = (function () {
    function DriverRegisterComponent(appComponent, logger, registerService, validate) {
        this.appComponent = appComponent;
        this.logger = logger;
        this.registerService = registerService;
        this.validate = validate;
        //表单数据模型
        this.driverModel = new driver_register_model_1.DriverRegester();
        this.debug = true;
        //表单错误和formControl的name一致
        //例如必须含有 <input #phoneNumber="ngModel">
        this.formErrors = this.validate.formErrors;
        //验证提示,phoneNumber名字和<input> formError一致
        this.validateMessage = this.validate.validateMessage;
        this.currentStep = 1;
        this.debugDisableGetCaptchaBtn = false;
    }
    DriverRegisterComponent.prototype.ngAfterContentInit = function () {
        // this.regService.getOssCredential().subscribe(cred => {
        //   console.log(cred);
        //   let callbackUrl = "http://" + cred.bucket + "." + cred.region + ".aliyuncs.com";
        //
        //   let uploader = new plupload.Uploader({
        //     runtimes: 'html5,flash,silverlight,html4',
        //     browse_button: 'selectfiles',
        //     //multi_selection: false,
        //     container: document.getElementById('container'),
        //     flash_swf_url: 'lib/plupload-2.1.2/js/Moxie.swf',
        //     silverlight_xap_url: 'lib/plupload-2.1.2/js/Moxie.xap',
        //     callbackUrl: callbackUrl,
        //
        //     init: {
        //       PostInit: function () {
        //         document.getElementById('ossfile').innerHTML = '';
        //         document.getElementById('postfiles').onclick = () => {
        //           // DriverRegisterComponent.setUploadParam(uploader, "", cred);
        //           uploader.start();
        //           return false;
        //         };
        //       },
        //
        //       FilesAdded: function (up, files) {
        //         plupload.each(files, function (file) {
        //           document.getElementById('ossfile').innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ')<b></b>'
        //             + '<div class="progress"><div class="progress-bar" style="width: 0%"></div></div>'
        //             + '</div>';
        //         });
        //       },
        //
        //       BeforeUpload: function (up, file) {
        //         DriverRegisterComponent.setUploadParam(up, file.name, cred);
        //       },
        //
        //       UploadProgress: function (up, file) {
        //         let d = document.getElementById(file.id);
        //         d.getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
        //         let prog = d.getElementsByTagName('div')[0];
        //         let progBar = prog.getElementsByTagName('div')[0]
        //         progBar.style.width = 2 * file.percent + 'px';
        //         progBar.setAttribute('aria-valuenow', file.percent);
        //       },
        //
        //       FileUploaded: function (up, file, info) {
        //         if (info.status == 200) {
        //           document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success, object name:ggd';
        //         }
        //         else {
        //           document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
        //         }
        //       },
        //
        //       Error: function (up, err) {
        //         console.log(err);
        //         // document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
        //       }
        //     }
        //   });
        //   uploader.init();
        //   console.log(uploader);
        // })
    };
    // static setUploadParam(up: any, filename: string, cred: OssSecurityCredential) {
    //
    //   let callbackUrl = "http://" + cred.bucket + "." + cred.region + ".aliyuncs.com";
    //
    //   let timeStamp: string = new Date().getTime().toString().substr(0, 10);
    //   let uuid: string = UUIDUtil.generateUuid();
    //
    //   let key: string = "18380461672" + '/' + "身份证正面"
    //     + Base64Util.base64Encode(timeStamp +
    //       GlobalFiled.IMG_SIGNATURE_SEPARATOR + uuid) + filename;
    //  let policy:any = {"expiration":"2017-01-16T09:00:59.200Z","conditions":[["content-length-range",0,1048576000]]}
    //   let sg = "OS0Xngack2E/cn9NMKpvBs/0rRU=";
    //   let policyBase64 = Base64Util.base64Encode(policy);
    //   let policyStr= "eyJleHBpcmF0aW9uIjoiMjAxNy0wMS0xNlQwOToyMzo1NC4xMzBaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwMF0sWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJoZWxsbyJdXX0=";
    //
    //   console.log(filename);
    //   let new_multipart_params: any = {
    //     //'Filename':filename,
    //    // 'key':"hello/"+ filename,
    //     'policy': policyStr,
    //     'OSSAccessKeyId': "LTAINwi1X2fotJaO",
    //     //'success_action_status': '200', //让服务端返回200,不然，默认会返回204
    //     'signature': sg,
    //   };
    //
    //   up.setOption({
    //     'multipart_params': new_multipart_params,
    //     'callbackUrl': callbackUrl
    //
    //   });
    // }
    DriverRegisterComponent.prototype.ngAfterViewInit = function () {
        this.initTestData();
        // this.attentionModal.hide();
        this.formChanged();
        this.appComponent.setBackground("driver.jpg");
        $("#photo_personal").fileinput();
    };
    DriverRegisterComponent.prototype.initTestData = function () {
        this.motorcycleTypes = [{
                trueValue: "宝马",
                showValue: "宝马",
            }, {
                trueValue: "大众",
                showValue: "大众"
            }];
        this.carTypes = [{
                trueValue: "大",
                showValue: "大"
            }, {
                trueValue: "中",
                showValue: "中"
            }];
        this.carProperties =
            [{
                    trueValue: "非运营车",
                    showValue: "非运营车",
                }, {
                    trueValue: "租赁车",
                    showValue: "租赁车"
                }];
        this.driverModel.sex = "男";
        this.driverModel.motorcycleType = this.motorcycleTypes[0].trueValue;
        this.driverModel.carType = this.carTypes[0].trueValue;
        this.driverModel.carProperty = this.carProperties[0].trueValue;
        this.driverModel.passengerNum = "4";
    };
    /**
     * 订阅表单数据改变事件
     */
    DriverRegisterComponent.prototype.formChanged = function () {
        var _this = this;
        if (this.currentForm == this.regForm) {
            return;
        }
        this.regForm = this.currentForm;
        if (this.regForm) {
            this.regForm.valueChanges
                .subscribe(function (data) { return _this.onFormValueChanged(data); });
        }
    };
    /**
     * 表单数据改变时对表单数据进行校验
     * @param data 表单数据
     */
    DriverRegisterComponent.prototype.onFormValueChanged = function (data) {
        if (!this.regForm) {
            return;
        }
        var form = this.regForm.form;
        for (var field in this.formErrors) {
            //清空先前的错误
            this.formErrors[field] = [];
            var control = form.get(field);
            //更新错误消息
            if (control && control.dirty && !control.valid) {
                var message = this.validateMessage[field];
                for (var key in control.errors) {
                    this.formErrors[field].push(message[key]);
                }
            }
        }
    };
    /**
     * 按钮点击的下一步
     */
    DriverRegisterComponent.prototype.nextStep = function () {
        if (++this.currentStep > 3) {
            this.currentStep = 0;
        }
    };
    /**
     * 按钮点击的上一步
     */
    DriverRegisterComponent.prototype.previousStep = function () {
        if (--this.currentStep < 1) {
            this.currentStep = 1;
        }
    };
    DriverRegisterComponent.prototype.getCaptcha = function () {
        var _this = this;
        this.registerService.getCaptcha(this.driverModel.phoneNumber)
            .subscribe(function (isOk) {
            _this.logger.log("获取结果：" + isOk);
            if (isOk) {
                swal('获取验证码成功', '', 'success');
                _this.debugDisableGetCaptchaBtn = true;
            }
        }, function (error) { return _this.logger.error(error); });
    };
    __decorate([
        core_1.ViewChild("attentionModal")
    ], DriverRegisterComponent.prototype, "attentionModal", void 0);
    __decorate([
        core_1.ViewChild('regForm')
    ], DriverRegisterComponent.prototype, "currentForm", void 0);
    DriverRegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-driver-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css', './register.form.css'],
            providers: [register_validate_1.DriverRegisterValidate]
        })
    ], DriverRegisterComponent);
    return DriverRegisterComponent;
}());
exports.DriverRegisterComponent = DriverRegisterComponent;
