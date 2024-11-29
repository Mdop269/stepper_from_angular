import {Component, inject, OnInit, Input} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { FormMyErrorStateMatcherService } from '../../service/form-my-error-state-matcher.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hobbies-interest',
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule
  ],
  templateUrl: './hobbies-interest.component.html',
  styleUrl: './hobbies-interest.component.css'
})
export class HobbiesInterestComponent implements OnInit {
  @Input() hobbiesInterestGroup!: FormGroup;  // Receiving formGroup from parent
  constructor(public errorStateMatcherService: FormMyErrorStateMatcherService) {}

  ngOnInit(): void {}

}
