import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { finalize } from 'rxjs/operators';
import { AppComponentBase } from 'src/shared/app-component.base';
import { AssessmentProxyService } from 'src/shared/proxies/assessment-proxy.service';
import { SeoService } from 'src/shared/seo/seo.service';

@Component({
  selector: 'app-microsite-landing',
  templateUrl: './microsite-landing.component.html',
  styleUrls: ['./microsite-landing.component.css']
})
export class MicrositeLandingComponent extends AppComponentBase implements OnInit {

  submitting: boolean;
  isDialogOpen: boolean;
  userId: number | undefined;

  pageTitle = 'Fourlead Career Microsite';
  pageKeywords = 'career page,career microsite,employee branding,employee branding,ATS ';
  pageDescription = 'A professional & functional microsite with onsite experience';


  careerPageForm = this.fb.group({
    yourName: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    contactNo: ['', ],

  });

  constructor(
    injector: Injector,
    private metaTagService: Meta,
    private seo: SeoService,
    private router: Router,
    private assessmentService: AssessmentProxyService,
    private fb: FormBuilder,
  ) {
    super(injector);

  }

  ngOnInit(): void {

    this.submitting = false;
    this.userId = this.appSession.userId;

    this.seo.generateTags({
      title: this.pageTitle,
      description: this.pageDescription,
      keywords: this.pageKeywords,
      image: 'assets/images/free-behavour-assessment.png',
    });
    this.metaTagService.addTags([
      { name: 'robots', content: 'index, follow' },
    ]);

  }

  public contactUs(): void {
    if (this.careerPageForm.valid) {

      this.submitting = true;
      this.assessmentService.contactUsCareer(this.careerPageForm.value)
        .pipe(
          finalize(() => {

            this.submitting = false;
          })
        )
        .subscribe(success => {
          if (success) {
           this.swal.fire('Success', 'Thank you for Contact us, Our support team will contact you soon' , 'success');
           this.router.navigate(['']);
          }
        });

    }
    else {
      this.swal.fire('', 'Validation Failed!', 'error');
    }
  }

}


