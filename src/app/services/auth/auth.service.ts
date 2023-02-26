import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { User } from 'src/app/interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

userUrl:string = "http://localhost:5500/api/users/signup"

 public postUser(user:User):Observable<User> {
    return this.http.post<User>(this.userUrl, user)
    
  }
  
}
