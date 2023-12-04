import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users : User[] = [];
  
  baseUrl = 'http://localhost:3000';

  constructor(private http :HttpClient) { }


  getUsers = () : Observable<User[]> =>{
    return this.http.get<User[]>(`${this.baseUrl}/users`, );
  }


  addUser = (user : Object) : Observable<User>=>{
    const options = {
      headers: new HttpHeaders(
        { 'content-type': 'application/json'}
        )
    };
    //const body = JSON.stringify(user)
    return(this.http.post<User>(
      `${this.baseUrl}/users`,
      user,
      options));
  }

  getUserById = (id : number) : Observable<User>=> {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`)
  }


  editUser = (user : User) : Observable<User>=>{
    const options = {
      headers: new HttpHeaders({ 'content-type': 'application/json'})
    };
    const body = {

      username : user.username,
      email: user.email,
      password: user.password,
    }

    return(this.http.put<User>(`${this.baseUrl}/users/${user.id}`, body, options));

  }

  deleteUser = (id : number) : Observable<Object> =>{
    return this.http.delete(`${this.baseUrl}/users/${id}`)
  }
}
