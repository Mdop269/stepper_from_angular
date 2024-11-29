import {Component, inject, OnInit, Input} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { FormMyErrorStateMatcherService } from '../../service/form-my-error-state-matcher.service';
import { CommonModule } from '@angular/common';
import { MatOption } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-address',
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatOption,
    MatSelectModule
  ],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent  implements OnInit {
  @Input() addressGroup!: FormGroup;  // Receiving formGroup from parent

  // in this we have error validator which check in real time 
  constructor(public errorStateMatcherService: FormMyErrorStateMatcherService) {}

  ngOnInit(): void {}
}
