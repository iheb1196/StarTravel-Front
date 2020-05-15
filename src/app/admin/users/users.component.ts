import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../app/services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];
  userForm: FormGroup;
  selectedUser;
  constructor(private apiService: ApiService) {
    this.userForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      role: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((response: any) => {
      console.log(response);
      this.users = response.data;
    });
  }

  selectUser() {
    this.userForm.setValue({
      firstname: this.selectedUser.firstname,
      lastname: this.selectedUser.lastname,
      email: this.selectedUser.email,
      
      password: '',
      role: this.selectedUser.role,
    });
  }

  addClient() {
    if (this.userForm.valid) {
      this.apiService.addUser(this.userForm.value).subscribe((response: any) => {
        this.ngOnInit();
      });
    }
  }
  editClient() {
    if (this.userForm.valid) {
      this.apiService.editUser(this.selectedUser._id, this.userForm.value).subscribe((response: any) => {
        this.ngOnInit();
      });
    }
  }



  deleteUser() {
    this.apiService.deleteUser(this.selectedUser._id).subscribe((response: any) => {
      this.ngOnInit();
    });
  }

}
