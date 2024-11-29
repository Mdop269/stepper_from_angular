import { Injectable } from '@angular/core';
import { FormMyErrorStateMatcher } from './form-my-error-state-matcher';
@Injectable({
  providedIn: 'root'
})
export class FormMyErrorStateMatcherService {
  matcher = new FormMyErrorStateMatcher();
}
