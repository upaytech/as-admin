import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListItemComponent } from './product-list-item/product-list-item/product-list-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { HttpClient } from 'selenium-webdriver/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListItemComponent,
    NavbarComponent,
    DashboardComponent,
    NewProductFormComponent,
    HomeComponent,
    UserProfileComponent,
    ProductsGridComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
