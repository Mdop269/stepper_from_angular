import {Component, inject, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { FormMyErrorStateMatcherService } from '../../service/form-my-error-state-matcher.service';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-user-detail',
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule

  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent  {
  @Input() userGroup!: FormGroup;  // Receiving formGroup from parent
  @Output() back = new EventEmitter()

  userDetailFormGroup!: FormGroup;
  addressFormGroup!: FormGroup;
  hobbiesInterestFormGroup!: FormGroup;
  
  constructor(public errorStateMatcherService: FormMyErrorStateMatcherService) {}
// in this function whenever call we will notify to the parent component through this 
  onBack() {
    this.back.emit() 
  }
}
