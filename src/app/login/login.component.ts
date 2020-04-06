import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../Model/Users';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	private emailPattern = "^[a-z0-9]+@[a-z0-9.-]+\.[a-z]{2,4}$";
	user: User;
	error;
	CreateFormGroup() {
		return new FormGroup({
			email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
			password: new FormControl('', [Validators.required, Validators.minLength(8)])
		})
	};
	loginForm: FormGroup;
	constructor(private userService:UserService, private router:Router) {
		this.loginForm = this.CreateFormGroup();
	}

	ngOnInit() {
	}
	login() {
		this.user = this.loginForm.value;
		this.userService.Login(this.user).subscribe(res => {
			if(res != null)
			{
				localStorage.setItem('UserId', res._id);
				localStorage.setItem('IsAdmin', res.IsAdmin);
				this.router.navigate(['Polizas']);
			}
			else {
				this.error = "Contraseña o usuarios incorrectos"
			}
		}, err => {
			this.error = err.error;
		});
	}

	get email() { return this.loginForm.get('email') };
	get password() { return this.loginForm.get('password') }

}
