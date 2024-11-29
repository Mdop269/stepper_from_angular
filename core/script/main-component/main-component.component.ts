import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { FormMyErrorStateMatcherService } from '../../service/form-my-error-state-matcher.service';
import { Iuser } from '../../interface_mdel/interface.model';
import { UserDetailComponent } from "../user-detail/user-detail.component";
import { AddressComponent } from "../address/address.component";
import { HobbiesInterestComponent } from "../hobbies-interest/hobbies-interest.component";
import { CommonModule } from '@angular/common';
import { UsersDetailDataService } from '../../service/users-detail-data.service';
import { RouterModule } from '@angular/router';




@Component({
  selector: 'app-main-component',
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    UserDetailComponent,
    AddressComponent,
    HobbiesInterestComponent,
    CommonModule,
    RouterModule
],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.css'
})
export class MainComponentComponent implements OnInit{

  isLinear = true;
  userDetailFormGroup!: FormGroup;
  addressFormGroup!: FormGroup;
  hobbiesInterestFormGroup!: FormGroup;
  userList: Iuser[] = [];


  // FormBuilder is a service that helps you create forms by simplifying the process of 
  // building instances of FormGroup and FormControl
  constructor(private fb: FormBuilder, private userReceiveData:UsersDetailDataService) {
    this.userReceiveData.products$.subscribe((data: Iuser[]) => this.userList = data)
  }

  ngOnInit() {
    // in this we intitalize the formgroup and form validator 
    this.initializeForms();

    // load stored data if available
    // this.loadStoredData();
  }
  
  // Initialize the form groups
  initializeForms() {
    // in this we have userdetail form group for only user detail child component 
    this.userDetailFormGroup = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      phoneNumber: ['', [Validators.required, Validators.pattern("[0-9 ]{10}")]],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\.[a-zA-Z]{2,}$")]],
    });

    // in this we have address form group only for address child component 
    this.addressFormGroup = this.fb.group({
      firstLine: ['', [Validators.required, Validators.minLength(15)]],
      country: ['', Validators.required],
      city: ['', Validators.required],
    });

    // in this we have hobbies interest form group only for child component 
    this.hobbiesInterestFormGroup = this.fb.group({
      hobbies: ['', [Validators.required, Validators.minLength(3)]],
      interest: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  // in this we are generating unique id for helping us in delete and all 
  generateUniqueId(){
    var uniq = (new Date()).getTime();
    return uniq
  }



  // whenever we click save this function will run  in which are sending this data 
  // to the service in this service we are storing all the data to local storage and from there we are sending the data to all the child component 
  onSubmit() {
    const userData = {
      Id: this.generateUniqueId(),
      firstName: this.userDetailFormGroup.value.firstName,
      lastName: this.userDetailFormGroup.value.lastName,
      phoneNumber: this.userDetailFormGroup.value.phoneNumber,
      email: this.userDetailFormGroup.value.email,
      firstLine: this.addressFormGroup.value.firstLine,
      country: this.addressFormGroup.value.country,
      city: this.addressFormGroup.value.city,
      hobbies: this.hobbiesInterestFormGroup.value.hobbies,
      interest: this.hobbiesInterestFormGroup.value.interest
    };
    
    // in this we are sending our dara to service
    this.userReceiveData.addData(userData)
  }
  
// if we click on on back function then it will assign the old value it will take from the local storage recent 
  onBack() {
    // we are getting all the json data and storing it in to the variable 
    const storedData = localStorage.getItem('details');
    // if there is any data then it will go inside this 
    if (storedData) {
      // in this we are converting our json data and storing in to the list  
      const storedList: Iuser[] = JSON.parse(storedData);
      // in this we are getting the latest data through checking by length 
      const latestData = storedList[storedList.length - 1]; // Get the most recent entry
      if (latestData) {
        // Set form values
        this.userDetailFormGroup.setValue({
          firstName: latestData.firstName,
          lastName: latestData.lastName,
          phoneNumber: latestData.phoneNumber,
          email: latestData.email
        });

        this.addressFormGroup.setValue({
          firstLine: latestData.firstLine,
          country: latestData.country,
          city: latestData.city
        });

        this.hobbiesInterestFormGroup.setValue({
          hobbies: latestData.hobbies,
          interest: latestData.interest
        });
      }
    }
  }

  // method for getting data directly first time from localstorage
  // loadStoredData() {
  //   const storedData = localStorage.getItem('details');
  //   if (storedData) {
  //     const storedList: Iuser[] = JSON.parse(storedData);
  //     if (storedList.length) {
  //       const latestData = storedList[storedList.length - 1];
  //       this.userDetailFormGroup.patchValue({
  //         firstName: latestData.firstName,
  //         lastName: latestData.lastName,
  //         phoneNumber: latestData.phoneNumber,
  //         email: latestData.email
  //       });

  //       this.addressFormGroup.patchValue({
  //         firstLine: latestData.firstLine,
  //         country: latestData.country,
  //         city: latestData.city
  //       });

  //       this.hobbiesInterestFormGroup.patchValue({
  //         hobbies: latestData.hobbies,
  //         interest: latestData.interest
  //       });
  //     }
  //   }
  // }


}
