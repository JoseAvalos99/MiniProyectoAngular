import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/Users';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	private _url: string = "http://localhost:8050/Users";
	constructor(private http: HttpClient) { }
	getUsers(): Observable<User[]> {
		return this.http.get<User[]>(this._url + '/');
	}
	Login(user:User):Observable<User>{
		return this.http.post<User>(this._url+'/Login',user);
	}
	Register(user:User):Observable<any>{
		return this.http.post<User>(this._url+'/',user);
	}
	deteleUserById(id:string):Observable<any>{
		return this.http.delete<User>(this._url+'/'+id);
	}
}
