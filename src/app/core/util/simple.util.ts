import {unescape} from "querystring";
export class SimpleUtil {
    static getQueryString(name): string {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        let r = window.location.search.substr(1).match(reg);
        if (r != null)return (r[2]);
        return null;
    }
}