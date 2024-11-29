import { Component, Inject } from '@angular/core';
import { UsersDetailDataService } from '../../service/users-detail-data.service';
import { Iuser } from '../../interface_mdel/interface.model';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog'

@Component({
  selector: 'app-dialog',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
 // with matdialog data we are taking data from the usertable component  to here which we have passed there 
  constructor(@Inject(MAT_DIALOG_DATA) public data: Iuser) {
    
  }
}