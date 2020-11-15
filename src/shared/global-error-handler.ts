import { ErrorHandler, Injectable, Inject, PLATFORM_ID } from '@angular/core';
import Swal from 'sweetalert2';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
  }

  handleError(error): void{
    let message = error.message;
    let detail = '';
    if (error.response) {
      let obj;
      try {
        obj = JSON.parse(error.response);
        message = obj.error && obj.error.message ? obj.error.message : message;
        detail = obj.error && obj.error.details ? obj.error.details : detail;
        Swal.fire(message, detail, 'error');
      } catch {
        console.log(error);
       }
    }

    if (isPlatformBrowser(this.platformId)) {
      console.log(error);

    }
    if (isPlatformServer(this.platformId)) {

    }

    // your custom error handling logic
  }
}
