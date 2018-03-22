import {isNullOrUndefined} from "util";
/**
 * 登录
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-18
 * @version    : v1.0
 */
export class HttpAccount {
    userName: string;
    userToken: string;
    expire: number;
    weiXinName:string;
    nickName:string;


    constructor(userName: string, userToken: string, expire: number) {
        this.userName = userName;
        this.userToken = userToken;
        this.expire = expire;
    }


    /**
     *转成毫秒级别
     * @param account
     * @returns {number}
     */
    static expireMs(account: HttpAccount): number {
        return account.expire * 1000;
    }

    /**
     * 转成秒级别
     * @param account
     * @returns {number}
     */
    static expireSec(account: HttpAccount): number {
        return account.expire;
    }

    /**
     * 秒级
     * @returns {number}
     */
    get expireSec(): number {
        return this.expire;
    }

    static isInfinityExpire(expire: number): boolean {
        return expire == HttpAccount.infinityExpire || isNullOrUndefined(expire);
    }


    static infinityExpire: number = -1;
}