import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { MyOdersComponent } from './my-oders/my-oders.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductComponent } from './product/product.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { SuccessComponent } from './success/success.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DropdownComponent,
    ShoppingCartComponent,
    HomeComponent,
    NotFoundComponent,
    MyOdersComponent,
    LoginComponent,
    LogoutComponent,
    ProductComponent,
    CheckOutComponent,
    SuccessComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
