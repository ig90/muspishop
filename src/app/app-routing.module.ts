import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  // access for anonymous users:
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  // only logged in users:
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuardService] },
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService] },
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
  // admin
  { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService] },
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
