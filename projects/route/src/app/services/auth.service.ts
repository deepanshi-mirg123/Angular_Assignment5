// import { Injectable, inject } from "@angular/core";
// import { UserService } from "./user.service";
// @Injectable({
//     providedIn: 'root'
// })
// export class AuthService{
//     isLogged: Boolean = false;
//     userService: UserService = inject(UserService);
//   isLoggedIn: any;

//     login(username: string, password: string){
//         let user = this.userService.users.find((u: { username: string; password: string; }) => u.username === username 
//                                                     && u.password === password);
//         if(user === undefined)
//             this.isLogged = false;
//         else
//             this.isLogged = true;
//         return user;
//     }

//     logout(){
//         this.isLogged = false;
//     }

//     IsAuthenticated(){
//         return this.isLogged;
//     }
// }
import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  static isLoggedIn(): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    throw new Error("Method not implemented.");
  }
  // static isLoggedIn: any;
  IsAuthenticated() {
      throw new Error('Method not implemented.');
  }
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
 
    if (email == 'admin@gmail.com' && password == 'admin123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Deepanshi Mirg', email: 'admin@gmail.com' });
    }else{
     
    return throwError(new Error('Failed to login'));
    }
  }
}