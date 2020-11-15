import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { SeoService } from 'src/shared/seo/seo.service';



@Component({
  selector: 'app-free-behaviour-assessment',
  templateUrl: './free-behaviour-assessment.component.html',
  styleUrls: ['./free-behaviour-assessment.component.css']
})
export class FreeBehaviourAssessmentComponent  implements OnInit {
  inviteToken: string;
  userId: number;
  invitedUserEmail: number;

  pageTitle = 'Fourlead – Malaysia\'s latest job portal | Discover your behaviour style | Sign up for free';
  pageKeywords = 'personality test,Jobs in malaysia,career building. Best job portal in malaysia,LinkedIn,jobs,behaviour assessment,pre employment, company culture,organisation culture,workplace culture,office politics,';
  pageDescription = 'A smarter job portal that empowers you to make smarter decisions through transparency. Discover high-level insights of a company; workplace culture, office politics level and flexibility before you apply.';


  constructor(
    injector: Injector,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private seo: SeoService,
    private metaTagService: Meta
  ) {
    const newLocal = 'inviteToken';
    this.inviteToken = this.activatedRoute.snapshot.params[newLocal];

    // this.companyRegNo = this.activatedRoute.snapshot.params['companyRegNo'];
    // this.invitedUserEmail = this.activatedRoute.snapshot.params['invitedUserEmail'];
    // this.userId = this.appSession.userId;
  }

  ngOnInit(): void {
    this.seo.generateTags({
      title: this.pageTitle,
      description: this.pageDescription,
      image: 'assets/images/free-behavour-assessment.png',
      keywords: this.pageKeywords

    });
    this.metaTagService.addTags([
      { name: 'robots', content: 'index, follow' },
    ]);



  }

  startFresh(): void {
    if (this.inviteToken) {
      this.router.navigate(['/assessment/student-assessment',  this.inviteToken   ]);
    }
    else {
      this.router.navigate(['/assessment/student-assessment']);

    }
  }

  startExperienced(): void {
    if (this.inviteToken) {
      this.router.navigate(['/assessment/behaviour-instruction',  this.inviteToken   ]);
    }
    else {
      this.router.navigate(['/assessment/behaviour-instruction']);

    }
  }
}
