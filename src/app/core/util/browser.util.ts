import {isNullOrUndefined} from "util";
export class BrowserUtil {
    static isWexin(): boolean {
        let ua = window.navigator.userAgent.toLowerCase();

        let ms = ua.match(/MicroMessenger/i);

        if (!isNullOrUndefined(ms) && ms.toString() == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    }
}