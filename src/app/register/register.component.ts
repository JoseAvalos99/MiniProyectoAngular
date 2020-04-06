import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from '../Model/Users';
import { UserService } from '../Services/user.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	private emailPattern = "^[a-z0-9]+@[a-z0-9.-]+\.[a-z]{2,4}$";
	user: User;
	error;
	CreateFormGroup() {
		return new FormGroup({
			email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
			password: new FormControl('', [Validators.required, Validators.minLength(8)]),
			passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(8)]),
		})
	};
	registerForm: FormGroup;
	constructor(private userService:UserService) {
		this.registerForm = this.CreateFormGroup();
	 }

	ngOnInit() {
	}
	register() {
		if(this.passwordConfirm.value != this.password.value){
			this.error ="Las contraseñas no coinciden"
			return;
		}
		console.log(this.registerForm.value);
		
		this.user = {
			id:"",
			Email :this.registerForm.value.email,
			Password: this.registerForm.value.password,
		    IsAdmin:false
		}
		console.log(this.user);
		this.userService.Register(this.user).subscribe(res => {
			if(res != null)
			{
				localStorage.setItem('UserId', res._id);
			}
			else {
				this.error = "Contraseña o usuarios incorrectos"
			}
		}, err => {
			console.log(err)
			this.error = err.error;
		});
	}
	get email() { return this.registerForm.get('email') };
	get password() { return this.registerForm.get('password') }
	get passwordConfirm() { return this.registerForm.get('passwordConfirm') }
}
