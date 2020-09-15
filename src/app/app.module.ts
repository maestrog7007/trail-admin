import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TrailGridComponent } from './trail-grid/trail-grid.component';
import { TrailCrudComponent } from './trail-crud/trail-crud.component';
import { TrailAPIService } from './services/trail-api.service';
import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  OKTA_CONFIG,
  OktaAuthModule, OktaCallbackComponent
} from '@okta/okta-angular';

import { AuthInterceptor } from './services/auth.interceptor';


const oktaConfig = {
  issuer: 'https://dev-281587.okta.com/oauth2/default',
  clientId: '0oaz58trbXyIjHg6D4x6',
  redirectUri: window.location.origin + '/implicit/callback',
  pkce: true
};

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'implicit/callback', component: OktaCallbackComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrailGridComponent,
    TrailCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    OktaAuthModule
  ],
  providers: [TrailAPIService, 
    { provide: OKTA_CONFIG, useValue: oktaConfig },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
