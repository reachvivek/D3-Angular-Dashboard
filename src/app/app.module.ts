import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { SplitterModule } from 'primeng/splitter';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LoaderComponent } from './standalone/loader/loader.component';
import { BASE_PATH } from '../swagger';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    LoaderComponent,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    SplitterModule,
  ],
  providers: [
    { provide: BASE_PATH, useValue: environment.BASE_PATH },
    provideClientHydration(),
    provideAnimations(),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
