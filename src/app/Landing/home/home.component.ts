import { Component, Injector, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { JsonLdService } from 'ngx-seo';
import { AppComponentBase } from 'src/shared/app-component.base';
import { SeoService } from 'src/shared/seo/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends AppComponentBase implements OnInit {
  pageTitle = 'Fourlead – A smarter job portal with behavioural assessment ';
  pageKeywords = 'personality test,Jobs in malaysia,career building. Best job portal in malaysia,LinkedIn,jobs,behaviour assessment,pre employment, company culture,organisation culture,workplace culture,office politics,';
  pageDescription = 'Fourlead empowers you to make smarter decisions through transparency. Discover jobs that suit your workplace behavioural style. Sign up now for free!';

  constructor(
    private metaTagService: Meta,
    injector: Injector,
    private seo: SeoService,
    private readonly jsonLdService: JsonLdService,
    private router: Router
  ) {
    super(injector);

    this.seo.generateTags({
      title: this.pageTitle,
      description: this.pageDescription,
      keywords: this.pageKeywords,
      image: 'assets/images/free-behavour-assessment.png'
    });
    this.metaTagService.addTags([{ name: 'robots', content: 'index, follow' }]);

    const jsonLdObject = this.jsonLdService.getObject('Website', {
      name: 'Fourlead',
      url: 'http://fourlead.com/'
    });
    this.jsonLdService.setData(jsonLdObject);
  }
  ngOnInit(): void {
    
  }
}
