import { Component, Injector, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { JsonLdService } from 'ngx-seo';
import { AppComponentBase } from 'src/shared/app-component.base';
import { SeoService } from 'src/shared/seo/seo.service';

@Component({
  selector: 'app-six-actionable-steps-that-determine',
  templateUrl: './six-actionable-steps-that-determine.component.html',
  styleUrls: ['../blog-detail.css']
})
export class SixActionableStepsThatDetermineComponent extends AppComponentBase implements OnInit {

  pageTitle = 'How Organisations Can Effectively Scale Performance and Drive Results with the Right People.';
  pageKeywords = 'personality test,Jobs in malaysia,career building. Best job portal in malaysia,LinkedIn,jobs,behaviour assessment,pre employment, company culture,organisation culture,workplace culture,office politics,';
  pageDescription = 'What is the problem; the tool or the person who pick the tool? It is easy to tell that we have used the wrong tool for the wrong job, just like the picture. What about the people in your organisation? It takes so much of study,';



  constructor(
    private metaTagService: Meta,
    injector: Injector,
    private seo: SeoService,
    private readonly jsonLdService: JsonLdService,

  ) {
    super(injector);

    this.seo.generateTags({
      title: this.pageTitle,
      description: this.pageDescription,
      keywords: this.pageKeywords,
      image: 'assets/images/free-behavour-assessment.png',
    });
    this.metaTagService.addTags([
      { name: 'robots', content: 'index, follow' },
    ]);

    const jsonLdObject = this.jsonLdService.getObject('Website', {
      name: 'Fourlead',
      url: 'http://fourlead.com/',
    });
    this.jsonLdService.setData(jsonLdObject);


  }
  ngOnInit(): void {

  }



}
