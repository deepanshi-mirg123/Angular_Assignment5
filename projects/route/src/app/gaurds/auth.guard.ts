// // // import { inject } from "@angular/core";
// // // import { AuthService } from "../services/auth.service";
// // // import { Router } from "@angular/router";
// // // // import { CourseService } from "./Services/course.service";

// // // export const CanActivate = () => {
// // //     const authService = inject(AuthService);
// // //     const router = inject(Router);

// // //     if(authService.IsAuthenticated()){
// // //         return true;
// // //     }else{
// // //         router.navigate(['/Login']);
// // //         return false;
// // //     }
// // // }

// // // export const CanActivateChild = () => {
// // //     return CanActivate();
// // // }

// // // export const resolve = () =>{
  
    
// // // }


// // import { AuthService } from '../services/auth.service';
// // import { Injectable } from '@angular/core';
// // import {
// //   ActivatedRouteSnapshot,
// //   CanActivate,
// //   Router,
// //   RouterStateSnapshot,
// // } from '@angular/router';

// // @Injectable({
// //   providedIn: 'root',
// // })
// // export class AuthGuard implements CanActivate {
// //   constructor(private router: Router, private auth: AuthService) {}
// //   canActivate(
// //     route: ActivatedRouteSnapshot,
// //     state: RouterStateSnapshot
// //   ): boolean {
// //     if (!this.auth.isLoggedIn()) {
// //       this.router.navigate(['/login']);
// //     }
// //     return this.auth.isLoggedIn();
// //   }
// // }

// import { inject } from "@angular/core";
// import { AuthService } from "../services/auth.service";
// import { Router } from "@angular/router";
// import { CourseService } from "../services/course.service";

// export const CanActivate = () => {
//     const authService = inject(AuthService);
//     const router = inject(Router);

//     if(authService.IsAuthenticated()){
//         return true;
//     }else{
//         router.navigate(['/Login']);
//         return false;
//     }
// }

// export const CanActivateChild = () => {
//     return CanActivate();
// }

// export const resolve = () =>{
//     const courseService = inject(CourseService);
//     return courseService.getAllcourses();
// }


import { CanActivateFn } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { inject } from "@angular/core";

export const authGaurd:  CanActivateFn = (route,state)=>{
  // return false;

  const authservice = inject (AuthService)
  const router = inject (Router)
  if (!authservice.isLoggedIn()) {
  router.navigate(['/login']);
  }
  return AuthService.isLoggedIn();
}
