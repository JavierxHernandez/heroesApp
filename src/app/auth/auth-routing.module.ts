import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LayoutPageComponent} from "./pages/layout-page/layout-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {NewPageComponent} from "../heroes/pages/new-page/new-page.component";

// .com/auth
const routes: Routes = [{
  path: '',
  component: LayoutPageComponent,
  children: [
    {path: 'login', component: LoginPageComponent},
    {path: 'new-account', component: NewPageComponent},
    {path: '**', redirectTo: 'login'},
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AuthRoutingModule {
}
