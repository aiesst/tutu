import {BaseRequestOptions, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
/**
 * 自定义http请求的头部信息，比如：json,auth等等
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-09
 * @version    : v1.0
 */
@Injectable()
export class TuTuRequestOptions extends BaseRequestOptions {
    constructor() {
        super();
        this.headers.append('Content-Type', 'application/json');
    }

    // withCredentials: true;

    appendToHeader(key: string, value: string) {
        this.headers.append(key, value);
    }

    setHeader(key: string, value: string) {
        this.headers.set(key, value);

    }

    deleteHeader(key: string) {
        this.headers.delete(key);
    }

    getHeaders():Headers{
        return this.headers;
    }


}

