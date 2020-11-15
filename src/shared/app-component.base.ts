import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { Injector } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppSessionService } from './session-app.service';
import { AppConfigService } from './AppConfigService';
export abstract class AppComponentBase {
  swal = Swal;
  message = Swal;
  notify: ToastrService;
  spinner: NgxSpinnerService;
  appSession: AppConfigService;
  constructor(injector: Injector | undefined) {
    this.appSession = injector.get(AppConfigService);
    this.notify = injector.get(ToastrService);
    this.spinner = injector.get(NgxSpinnerService);
  }

  isFoundHardSkill(skills): any{
    if (skills) {
    return skills.some(s => s.skillCategoryId === 1 && s.skillTypeId !== 7) ;
    }
  }
  isFoundSoftSkill(skills): any{
    if (skills) {
    return skills.some(s => s.skillCategoryId === 2);
    }
  }

  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        if (!control.valid || control.hasError) {
          control.markAsTouched({ onlySelf: true });
          control.markAsDirty({ onlySelf: true });

        }
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
