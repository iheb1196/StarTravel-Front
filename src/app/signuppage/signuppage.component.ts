import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {

  createdSuccessfully = false;
  errorMessage = '';
  isLoading = false;

  signUpForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phonenumber: new FormControl('', [Validators.required, Validators.minLength(3)]),
    adress: new FormControl('', [Validators.required, Validators.minLength(3)]),
    country: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confPassword: new FormControl('', [Validators.required]),
  });
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signUpUser(e) {
    this.errorMessage = '';
    this.isLoading = true;
    this.createdSuccessfully = false;

    if (this.signUpForm.value.password !== this.signUpForm.value.confPassword) {
      this.errorMessage = 'Passwords don\'t match';
    } else {
      this.auth.createUser(this.signUpForm.value).subscribe((data) => {
        console.log(data);

        try {
          const res = data;

          if (res.msg === 'OK') {
            this.createdSuccessfully = true;
            this.isLoading = false;
            this.signUpForm.reset();
            this.router.navigateByUrl('/login');
          } else {
            this.isLoading = false;
            this.errorMessage = 'Something went wrong, check your data and try again.';
          }
        } catch (e) {
          this.isLoading = false;
          this.errorMessage = 'Something went wrong, try again.';
        }


      }, (error) => {
        this.isLoading = false;
        this.errorMessage = 'Something went wrong, try again.';
      });
    }
  }
}
