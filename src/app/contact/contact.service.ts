import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";

import {Contact} from "./contact"
import {HttpResult} from "../core/model/http-result.model";
import {RestfulServerRouter} from "../shared/config/http/http-router.config";

/**
 * 获取联系信息服务
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-09
 * @version    : v1.0
 */
@Injectable()
export class ContactService {

  constructor(private http: Http) {
    this.contact = new Contact();
    this.contact.name = "kevin";
    this.contact.email = "kevin@gmail.com";
    this.contact.phoneNum = "18482843";
    this.contact.message = "hello world";
  }

  private contact: Contact;
  private headers: Headers = new Headers();


  get(): Observable<HttpResult<String>> {
    return this.http.post(RestfulServerRouter.connectUs,
      JSON.stringify(this.contact))
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }


  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
