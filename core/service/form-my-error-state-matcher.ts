import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

/** Error when invalid control is dirty, touched, or submitted. */
// The ErrorStateMatcher class is used to determine when an error message should be displayed for a form control.
export class FormMyErrorStateMatcher implements ErrorStateMatcher{
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        // we are using .error rather then .hasError because in hasError we need to have the thing in html because we havent clicked that input it wont be so with error we are checking wholee html so for that or is better 
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted) && (control.errors?.['required'] || control.errors?.['min'] || control.errors?.['minlength'] || control.errors?.['pattern']));
      }
}
