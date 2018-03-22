import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {ErrorAlterComponent} from "./component/error-altert.component";
import {PhoneNumberValidator} from "./validator/phone-number.validator";
import {NumberValidator} from "./validator/number.validator";
import {LengthValidator} from "./validator/length.validator";
import {IdCardValidator} from "./validator/id-card.validator";
import {CarLicenseValidator} from "./validator/car-license.validator";
import {OssImgUploadComponent} from "./component/img-upload/img-upload.component";
import {SimpleValidator} from "./validator/simple.validator";



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ErrorAlterComponent,OssImgUploadComponent,
    PhoneNumberValidator, NumberValidator, LengthValidator,SimpleValidator,
    IdCardValidator, CarLicenseValidator],
  exports: [ErrorAlterComponent,OssImgUploadComponent,SimpleValidator,
    PhoneNumberValidator, NumberValidator, LengthValidator,
    IdCardValidator, CarLicenseValidator, CommonModule, FormsModule,]
})

/**
 * 该模块只存放公用的 component,Directive 等等, 由其它模块导入
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-16
 * @version    : v1.0
 */
export class SharedModule {
}
