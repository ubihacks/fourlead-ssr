import { Component, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from 'src/shared/app-component.base';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends AppComponentBase implements OnInit {

  userId: number | undefined;

  constructor(

    private injector: Injector

  ) {
    super(injector);
  }

  ngOnInit(): void {

    this.userId = this.appSession.userId;
  }

}
