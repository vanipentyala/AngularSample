import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import   {RouterModule,Routes} from '@angular/router';
import { RegisterDetailsComponent } from './register-details.component';

const appRoutes45: Routes = [
  { path: 'register', component: RegisterDetailsComponent }
]
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(appRoutes45)
 ],
  declarations: []
})
export class AuthModule { }
