/**
 * 用于生成相应的UUID
 * Created by zhz on 2017/1/11.
 */

export class UUIDUtil {

  // 默认拼接字符串
  private static readonly DEFAULT_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  static generateUuid(): string {

    let uuid: any[] = [36];
    let rnd: number = 0;
    let r: number;

    for (let i = 0; i < 36; i++) {
      if (i==8 || i==13 ||  i==18 || i==23) {
        uuid[i] = '-';
      } else if (i==14) {
        uuid[i] = '4';
      } else {
        if (rnd <= 0x02) rnd = 0x2000000 + (Math.random()*0x1000000)|0;
        r = rnd & 0xf;
        rnd = rnd >> 4;
        uuid[i] = UUIDUtil.DEFAULT_CHARS[(i == 19) ? (r & 0x3) | 0x8 : r];
      }
    }
    return uuid.join('');
  }
}
