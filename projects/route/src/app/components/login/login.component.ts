import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Observable, catchError, tap, throwError } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  faLock = faLock;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private auth: AuthService, private router: Router) { }
  ngOnInit(): void {
    console.log('login loaded');
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['display']);
    }
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value)
        .pipe(
          tap((result: any) => {
            console.log(result);
            this.router.navigate(['/display']);
          }),
          catchError((err: Error) => {
            alert(err.message);
            return throwError(err);
          })
        )
        .subscribe();
    }
  }
}


