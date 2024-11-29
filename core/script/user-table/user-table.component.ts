import {Component, inject} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { UsersDetailDataService } from '../../service/users-detail-data.service';
import { Iuser } from '../../interface_mdel/interface.model';
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';
import {
  MatDialog,
} from '@angular/material/dialog'
import { DialogComponent } from '../dialog/dialog.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



@Component({
  selector: 'app-user-table',
  imports: [
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule,
    MatTableModule,
    RouterModule,
    SweetAlert2Module

  ],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {

  // in this i am storing all the new data 
  userList: Iuser[] = [];
  // pre defining columns name 
  displayedColumns: string[] = ['FirstName', 'LastName', 'Phone Number', 'Email','actions'];

  
  // getting the data from the service and storing it in to the list
  // defining dialog variable to MatDialog
  constructor(private userReceiveData:UsersDetailDataService, public dialog: MatDialog) {
    this.userReceiveData.products$.subscribe((data: Iuser[]) => this.userList = data)
  }

  // whenever someone click on iDot this function will run 
  openDialog(data: Iuser){
    // in this we are defining the component in which our dialog will run \
    // {data: data } this is the data which we are sending to the dialog component it will know it is a value of the perticular row as we are sending direct from code 
    this.dialog.open(DialogComponent, {data: data }) ;

  }
  
  // this will send the current data which we want to delete to the service and it will delete from there 
  onDelete(data : Iuser){
    this.userReceiveData.deleteData(data)
  }
} 
