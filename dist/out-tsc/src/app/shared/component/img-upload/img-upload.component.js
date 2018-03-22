///<reference path='../../../../../node_modules/immutable/dist/immutable.d.ts'/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy, ViewChild, ElementRef, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { isNullOrUndefined } from "util";
import { LoggerService } from "../../../core/service/logger.service";
/**
 * 图片上传组件，封装了 bootstrap-fileinput
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 17/1/25
 * @version    : v1.0
 */
export var OssImgUploadComponent = (function () {
    function OssImgUploadComponent(logger, cd) {
        this.logger = logger;
        this.cd = cd;
        //上传成功回调
        this.onSuccess = new EventEmitter();
        //上传失败回调
        this.onError = new EventEmitter();
        this.defaultImgTipText = "图片";
        this.config = new OssImgUploadConfig();
        this.config.isHidden = true;
    }
    OssImgUploadComponent.prototype.getImgTipText = function () {
        if (isNullOrUndefined(this.imgTipText)) {
            return this.defaultImgTipText;
        }
        return this.imgTipText;
    };
    /**
     * 通过ossParam初始化图片上传插件
     * @param ossParam 接入 oss 的参数
     */
    OssImgUploadComponent.prototype.initByOssParam = function (ossParam) {
        var _this = this;
        this.config.isHidden = false;
        //由于标记了onPush 所以需要强制检测一下
        this.cd.markForCheck();
        $(this.imgUploadInput.nativeElement).fileinput({
            dropZoneTitle: this.getImgTipText(),
            uploadUrl: ossParam.url,
            showUpload: true,
            showCaption: true,
            showPreview: true,
            //oss 返回的xml 不是json 所以需要配置一下
            ajaxSettings: {
                dataType: "xml"
            },
            showAjaxErrorDetails: false,
            language: 'zh',
            enctype: 'multipart/form-data',
            allowedPreviewTypes: ['image'],
            allowedFileTypes: ['image'],
            allowedFileExtensions: ['jpg', 'png'],
            uploadAsync: true,
            maxFileSize: 2048,
            uploadExtraData: {
                'policy': ossParam.policy,
                'OSSAccessKeyId': ossParam.accessKeyId,
                'success_action_status': '200',
                'signature': ossParam.signature,
            }
        }).on('filepreupload', function (event, outData, previewName, index) {
            //将file放到form表单的最后，不然OSS会报错
            outData.form.delete('file_id');
            outData.form.delete('file');
            //生成名字
            _this.imgName = _this.imgName || outData.files[0].name;
            _this.imgName = _this.imgName + "." + outData.files[0].name.replace(/.+\./, "");
            // this.logger.log("上传图片名字", uploadImgName);
            //key需要filename所以在这里设置
            outData.form.set("key", ossParam.dir + "/" + _this.imgName);
            outData.form.set('Content-Type', outData.files[0].type);
            outData.form.set('file', outData.files[0], outData.files[0].name);
        }).on("fileuploaded", function (event, data, previewId, index) {
            var e = new OssImgUploadEvent();
            e.imgName = _this.imgName;
            _this.onSuccess.emit(e);
        }).on('fileuploaderror', function (event, data, msg) {
            var e = new OssImgUploadEvent();
            e.imgName = _this.imgName;
            e.msg = msg;
            _this.onError.emit(e);
        });
    };
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], OssImgUploadComponent.prototype, "imgTipText", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], OssImgUploadComponent.prototype, "imgName", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], OssImgUploadComponent.prototype, "onSuccess", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], OssImgUploadComponent.prototype, "onError", void 0);
    __decorate([
        ViewChild("img_upload"), 
        __metadata('design:type', ElementRef)
    ], OssImgUploadComponent.prototype, "imgUploadInput", void 0);
    OssImgUploadComponent = __decorate([
        Component({
            selector: 'tt-oss-img-upload',
            templateUrl: './img-upload.component.html',
            styleUrls: ['./img-upload.component.css'],
            //减少check次数
            changeDetection: ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [LoggerService, ChangeDetectorRef])
    ], OssImgUploadComponent);
    return OssImgUploadComponent;
}());
/**
 * 配置项
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 17/1/25
 * @version    : v1.0
 */
var OssImgUploadConfig = (function () {
    function OssImgUploadConfig() {
    }
    return OssImgUploadConfig;
}());
export var OssImgUploadEvent = (function () {
    function OssImgUploadEvent() {
    }
    return OssImgUploadEvent;
}());
//# sourceMappingURL=/Users/ychostMac/Desktop/web_front/src/src/app/shared/component/img-upload/img-upload.component.js.map