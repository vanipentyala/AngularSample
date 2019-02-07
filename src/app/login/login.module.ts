import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import   {RouterModule,Routes} from '@angular/router';
import { LoginDetailsComponent } from './login-details.component';
const appRoutes123: Routes = [
  { path: 'login', component: LoginDetailsComponent }
]
@NgModule({
  imports: [
    CommonModule ,RouterModule.forChild(appRoutes123) ],
  declarations: []
})
export class LoginModule { }
