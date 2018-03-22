import {Inject, Injectable} from "@angular/core";

/**
 * 页面服务类，主要用于设置页面的背景等等
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-17
 * @version    : v1.0
 */
@Injectable()
export class PageService {

    currentBackground: any;

    setBackground(imageName: string) {
        imageName = "../assets/img/" + imageName;
        let jq:any = $;
        this.currentBackground = jq.backstretch([imageName]);

    }

    /**
     * 清除背景
     */
    clearBackground() {
        try {
            this.currentBackground.destroy(false);
        } catch (e) {

        }
    }
}
