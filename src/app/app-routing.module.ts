import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [

  {
    path: '', component: HomeComponent
  },
  {
    path: 'addproduct', component: NewProductFormComponent
  },
  {
    path: 'user', component: UserProfileComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
