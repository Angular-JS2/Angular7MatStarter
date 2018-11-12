import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserdataService} from '../userdata.service';



@Component({
  selector: 'app-register-profile',
  templateUrl: './register-profile.component.html',
  styleUrls: ['./register-profile.component.css']
})
export class RegisterProfileComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  res:any;


  constructor(private _formBuilder: FormBuilder , private userService: UserdataService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      password: ['', Validators.required]
      

    });
    this.secondFormGroup = this._formBuilder.group({
      address: ['', Validators.required]
    });

    
  }

  form1(){
   let myobj = Object.assign(this.firstFormGroup.value, this.secondFormGroup.value);
   this.res=myobj;
    console.log(myobj);
  

    this.userService.addUser(this.res).subscribe(
      data => {
        // refresh the list
        this.userService.getUser();
        return true;
      },
      error => {
        console.error("Error saving addUser!");
       // return Observable.throw(error);
      }
   );
  }

  form2(){
   // console.log(this.secondFormGroup.value);
  }

 
}
