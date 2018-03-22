import { async, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
describe('LoginComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [LoginComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/login/login.component.spec.js.map