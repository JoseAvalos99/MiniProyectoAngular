import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsurancePolicyListComponent } from './insurance-policy-list/insurance-policy-list.component';
import { HttpClientModule } from '@angular/common/http';
import { InsunrancePolicyAddOrEditComponent } from './insunrance-policy-add-or-edit/insunrance-policy-add-or-edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InsurancePolicyListComponent,
    InsunrancePolicyAddOrEditComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	HttpClientModule,
	ReactiveFormsModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
