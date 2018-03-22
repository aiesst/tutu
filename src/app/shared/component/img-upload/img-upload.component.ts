///<reference path='../../../../../node_modules/immutable/dist/immutable.d.ts'/>

import {
    Component, OnInit, AfterViewInit, Input, ChangeDetectionStrategy, ViewChild, ElementRef,
    EventEmitter, Output, ChangeDetectorRef
} from '@angular/core';


import {OSSAccessParam} from "../../../core/model/oss-access-param.model";
import {isNullOrUndefined} from "util";
import {LoggerService} from "../../../core/service/logger.service";

/**
 * 图片上传组件，封装了 bootstrap-fileinput
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 17/1/25
 * @version    : v1.0
 */
@Component({
    selector: 'tt-oss-img-upload',
    templateUrl: './img-upload.component.html',
    styleUrls: ['./img-upload.component.css'],
    //减少check次数
    changeDetection: ChangeDetectionStrategy.OnPush
})


export class OssImgUploadComponent {
    //图片框提示
    @Input() imgTipText: string;
    //成功提示
    @Input()  imgName: string;

    //上传成功回调
    @Output()
    onSuccess: EventEmitter<OssImgUploadEvent> = new EventEmitter();
    //上传失败回调
    @Output()
    onError: EventEmitter<OssImgUploadEvent> = new EventEmitter();


    private defaultImgTipText: string = "图片";

    private getImgTipText(): string {
        if (isNullOrUndefined(this.imgTipText)) {
            return this.defaultImgTipText;
        }
        return this.imgTipText;
    }

    private config: OssImgUploadConfig;


    //未初始化的时候隐藏
    @ViewChild("img_upload") private imgUploadInput: ElementRef;

    constructor(private logger: LoggerService, private cd: ChangeDetectorRef) {
        this.config = new OssImgUploadConfig();
        this.config.isHidden = true;
    }

    /**
     * 通过ossParam初始化图片上传插件
     * @param ossParam 接入 oss 的参数
     */
    initByOssParam(ossParam: OSSAccessParam): void {
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
                'success_action_status': '200', //让服务端返回200,不然，默认会返回204
                'signature': ossParam.signature,
            }
        }).on('filepreupload', (event, outData, previewName, index) => {
            //将file放到form表单的最后，不然OSS会报错
            outData.form.delete('file_id');
            outData.form.delete('file');
            //生成名字
            this.imgName = this.imgName || outData.files[0].name;
            this.imgName = this.imgName+"."+outData.files[0].name.replace(/.+\./,"");
            // this.logger.log("上传图片名字", uploadImgName);
            //key需要filename所以在这里设置
            outData.form.set("key", ossParam.dir + "/" + this.imgName);
            outData.form.set('Content-Type', outData.files[0].type);
            outData.form.set('file', outData.files[0], outData.files[0].name);
        }).on("fileuploaded", (event, data, previewId, index) => {
            let e = new OssImgUploadEvent();
            e.imgName = this.imgName;
            this.onSuccess.emit(e);

        }).on('fileuploaderror', (event, data, msg) => {
            let e = new OssImgUploadEvent();
            e.imgName = this.imgName;
            e.msg = msg;
            this.onError.emit(e);
        });

    }
}


/**
 * 配置项
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 17/1/25
 * @version    : v1.0
 */
class OssImgUploadConfig {
    isHidden: boolean;
}

export class OssImgUploadEvent {
    imgName: string;
    msg: string;

}