import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from './../../../services/admin/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.4s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.2s', style({ opacity: 0 }))
      ])
    ]),
  ],
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public active = false;

  constructor(private formBuilder: FormBuilder,
    private adminService: AdminService,
    private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() { }

  login() {
    this.adminService.login(this.username.value, this.password.value)
      .subscribe(r => {
        if (!r) {
          this.warning();
        } else {
          this.router.navigate(['/admin/board/manage/']);
        }
      });
  }

  warning() {
    this.active = true;
    setTimeout(() => {
      this.active = false;
    }, 600);
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

}