import { Component, OnInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log('forgot-password loaded');
  }
  faLock =faLock;
}
