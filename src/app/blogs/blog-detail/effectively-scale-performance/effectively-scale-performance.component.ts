import { Component, Injector, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { JsonLdService } from 'ngx-seo';
import { AppComponentBase } from 'src/shared/app-component.base';
import { SeoService } from 'src/shared/seo/seo.service';

@Component({
  selector: 'app-effectively-scale-performance',
  templateUrl: './effectively-scale-performance.component.html',
  styleUrls: ['../blog-detail.css']
})
export class EffectivelyScalePerformanceComponent extends AppComponentBase implements OnInit {

  pageTitle = 'How to Use Your Organisational Culture to Hire the Right Employees.';
  pageKeywords = 'personality test,Jobs in malaysia,career building. Best job portal in malaysia,LinkedIn,jobs,behaviour assessment,pre employment, company culture,organisation culture,workplace culture,office politics,';
  pageDescription = 'you have heard a lot about the importance of hiring the right employee (yay), and you are zeroed in on getting the best man for the job. How do you make your hiring more efficient and accurate without overshooting your recruitment budget (or wearing out your HR manager with your motivational';



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
