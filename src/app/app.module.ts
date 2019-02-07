import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule,FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page.component';
import { AboutPageComponent } from './home/about-page.component';
import { ContactDetailsComponent } from './contact/contact-details.component';

import{ ContactService } from './contact/contact-details.services';
import { ComformComponent } from './comform/comform.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginDetailsComponent } from './login/login-details.component';
import { RegisterDetailsComponent } from './register/register-details.component';
import{HttpClientModule } from '@angular/common/http';
import { GetdatadbComponent } from './getdatadb/getdatadb.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactDetailsComponent,
    LoginDetailsComponent,
    RegisterDetailsComponent,
    ComformComponent,
    GetdatadbComponent,
    
    
  ],
  imports: [
    BrowserModule,

    ReactiveFormsModule,FormsModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
