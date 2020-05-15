import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),

  });

  createdSuccessfully: boolean = false;
  errorMessage = "";
  isLoading: boolean = false;


  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.auth.login(this.loginForm.value).subscribe((data) => {
      console.log(data);
      try {
        let res = data;
        if (res.msg === 'OK') {
          this.isLoading = false;
          window.localStorage.setItem('token', res.data.token);
          this.auth.getCurrentUser();
          if (res.data.role === 'admin') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigateByUrl('/home');
          }
        } else {
          this.isLoading = false;
          this.errorMessage = res.msg;
        }
      } catch (e) {
        this.isLoading = false;
        this.errorMessage = "Something went wrong, try again.";
      }


    }, (error) => {
      this.isLoading = false;
      this.errorMessage = "Something went wrong, try again.";
    })
  }
}
