import { NgModule } from '@angular/core';
import { HomePageComponent } from './home/home-page.component';
import { AboutPageComponent } from './home/about-page.component';
import { ContactDetailsComponent } from './contact/contact-details.component';
import   {RouterModule,Routes} from '@angular/router';
import { AuthModule } from './register/auth.module';
import { LoginModule } from './login/login.module';
import{GetdatadbComponent}from './getdatadb/getdatadb.component';


const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about',      component: AboutPageComponent },
  { path: 'Order',      component: GetdatadbComponent },
  { path: 'ContactUs',      component: ContactDetailsComponent },
  { path: 'register',   loadChildren:'./register/auth.module#AuthModule' },
  { path: 'login',      loadChildren:'./login/login.module#LoginModule' },
]
@NgModule({
  imports: [
   RouterModule.forRoot(appRoutes),AuthModule,LoginModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { 


  
}
