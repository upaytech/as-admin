import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [

  {
    path: '', component: HomeComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'addproduct', component: NewProductFormComponent
  },
  {
    path: 'user', component: UserProfileComponent
  },
  {
    path: 'products', component: ProductsGridComponent
  },
  {
    path: 'products/:id', component: ProductDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
