
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import {InfosPratiquesFaqComponent} from './components/infos-pratiques-faq/infos-pratiques-faq.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'programmation', component: HomeComponent },
  { path: 'billeterie', component: HomeComponent },
  { path: 'plan-du-festival', component: HomeComponent },
  { path: 'photos', component: HomeComponent },
  { path: 'news', component: HomeComponent },
  { path: 'infos-pratiques-faq', component: InfosPratiquesFaqComponent },
  { path: 'partenaires', component: HomeComponent },
  // { path: '**', component: NoContentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfosPratiquesFaqComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false, scrollPositionRestoration: 'enabled' } // <-- debugging purposes only
    ),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    })
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
