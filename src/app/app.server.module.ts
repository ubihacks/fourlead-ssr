import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerStateInterceptor } from 'src/shared/http-interceptors/serverstateinterceptor';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule
  ],
  providers: [
    // Add universal-only providers here
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ServerStateInterceptor,
        multi: true
    }
],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
