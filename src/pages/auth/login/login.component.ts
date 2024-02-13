import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  ngOnInit() {}
  onSubmit = () => {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value.username);
      this.authService.loggedInUser(this.loginForm.value).subscribe((res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('is_login', 'True');
        this.router.navigate(['/home']);
      });
    }
  };
}
