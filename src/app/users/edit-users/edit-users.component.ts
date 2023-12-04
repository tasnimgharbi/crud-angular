import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  constructor(
    private activatedRoute : ActivatedRoute,
    private service : UserService,
    private formBuilder : FormBuilder,
    private router : Router){}

  user? : User;
  //Reactive Form
  editForm = this.formBuilder.group({
    username : '',
    email : '',
    password : ''
  });
  /*editForm = new FormGroup({
    username : new FormControl(''),
    password : new FormControl(''),
     : new FormControl('')
  })*/

  editUser = ()=>{
    //console.log(this.editForm);
    const values = this.editForm.value;
    this.service.editUser(
      new User(this.user!.id, values.username!, values.email!, values.password!)
    ).subscribe(
      user => this.router.navigate(['/users'])
    ); 
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params=>{
        //this.user = this.service.getUserById(+params['id']);
        this.service.getUserById(+params['id']).subscribe(
          user=> {
            this.user = user;

            console.log(this.user);
            this.editForm.setValue({
              username : this.user.username,
              email : this.user.email,
              password : this.user.password, 
            })
          }
        )
      }
    )

  }


}
