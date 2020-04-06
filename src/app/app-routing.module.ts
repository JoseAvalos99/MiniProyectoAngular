import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsurancePolicyListComponent } from './insurance-policy-list/insurance-policy-list.component';
import { InsunrancePolicyAddOrEditComponent } from './insunrance-policy-add-or-edit/insunrance-policy-add-or-edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
	{path: 'Login', component:LoginComponent},
	{path: 'Register', component:RegisterComponent},
	{path: 'Polizas', component:InsurancePolicyListComponent},
	{path: 'Poliza/:id', component:InsunrancePolicyAddOrEditComponent},
	{path: 'Poliza', component:InsunrancePolicyAddOrEditComponent},
	{path: 'UserList', component:UserListComponent},
	{path: '', redirectTo:'Login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
