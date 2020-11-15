import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SeoService {


  private urlMeta = 'og:url';
  private titleMeta = 'og:title';
  private descriptionMeta = 'og:description';
  private imageMeta = 'og:image';
  private secureImageMeta = 'og:image:secure_url';
  private twitterTitleMeta = 'twitter:text:title';
  private twitterImageMeta = 'twitter:image';

  constructor(private titleService: Title, private metaService: Meta, private router: Router) { }


  generateTags({ title = '', description = '', keywords = '', image = '' }) {


    this.titleService.setTitle(title);
    this.metaService.addTags([

      { name: 'description' , content: description },
      { name: 'keywords' , content: keywords },

      // Open Graph
      { name: 'fb:app_id' , content: '1343068382519370' },
      { name: 'og:url' , content: `https://fourlead.com/${this.router.url}` },
      { name: 'og:title' , content: title },
      { name: 'og:description' , content: description },
      { name: 'og:image' , content: `https://fourlead.com/${image}` },
      { name: 'og:image:secure_url' , content: `https://fourlead.com/${image}` },
      { name: 'og:image:width' , content: '1200' },
      { name: 'og:image:height' , content: '630' },
      { name: 'og:type' , content: 'website' },

      // Twitter Card
      { name: 'twitter:card' , content: 'summary' },
      { name: 'twitter:title' , content: title },
      { name: 'twitter:description' , content: description },
      { name: 'twitter:image' , content:  `https://fourlead.com/${image}` },

  ]);
  }


}
