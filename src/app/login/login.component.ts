import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

// import { BaseFormUser } from 'src/app/utils/base-form-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  // hide = true;
  // private subscription: Subscription = new Subscription();

  constructor() // private router: Router, // private authSvc: AuthService,
  // public loginForm: BaseFormUser
  {}

  ngOnInit(): void {
    // this.loginForm.baseForm.get('role').setValidators(null);
    // this.loginForm.baseForm.get('role').updateValueAndValidity();
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

  // onLogin(): void {
  //   if (this.loginForm.baseForm.invalid) {
  //     return;
  //   }

  //   const formValue = this.loginForm.baseForm.value;
  //   this.subscription.add(
  //     this.authSvc.login(formValue).subscribe((res) => {
  //       if (res) {
  //         this.router.navigate(['']);
  //       }
  //     })
  //   );
  // }

  // checkField(field: string): boolean {
  //   return this.loginForm.isValidField(field);
  // }
}
