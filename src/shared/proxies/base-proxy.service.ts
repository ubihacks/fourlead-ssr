import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { SwaggerException } from '../dto/auth-models';
import Swal from 'sweetalert2';

export class BaseProxyService {
  swal = Swal;
  public throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
      return _observableThrow(result);
    else
      return _observableThrow(new SwaggerException(message, status, response, headers, null));
  }

  public blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
      if (!blob) {
        observer.next("");
        observer.complete();
      } else {
        let reader = new FileReader();
        reader.onload = event => {
          observer.next((<any>event.target).result);
          observer.complete();
        };
        reader.readAsText(blob);
      }
    });
  }


  getDomain(url) {
    var domainRegex = /(https?:){0,1}\/\/((?:[\w\d-]+\.)+[\w\d]{2,})/i;
    var matches = domainRegex.exec(url);
    return (matches && matches[2]) ? matches[2] : '';
  }

}




