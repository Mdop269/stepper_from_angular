import { Injectable } from '@angular/core';
import { Iuser } from '../interface_mdel/interface.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersDetailDataService {
  // assinging behaviour subject which will transfer the data
  public SendUserData = new BehaviorSubject<Iuser[]>([])
  products$ = this.SendUserData.asObservable();  // observvable for component to subscribe to 

  // this is not compulsor but we are using for providing the data type 
  userList: Iuser[] = [];

  // in this we are loading the data and storing it in to the variable array
  constructor() {
    if (typeof window !== 'undefined' && window.localStorage){
      const savedData = localStorage.getItem('details');
      if (savedData) {
        this.userList = JSON.parse(savedData);
        this.SendUserData.next(this.userList);
      } 
    } 
   }

  //  in this whenever someone click on submit we will run this function 
   addData(data: Iuser){
    // this is the json data for all the value with get value of the data
    const currentData = this.SendUserData.getValue();
    // then we are making it list 
    const updatedData = [...currentData]
    // we are pushing new data to the above list 
    updatedData.push(data)
    // in this function we will store to local storage and we will pass to our subscriber
    this.saveData(updatedData)
   }

  //  in this we are storing the data to local storage and passing it to the our subscriber
   saveData(data: Iuser[]){
    localStorage.setItem('details', JSON.stringify(data))
    this.SendUserData.next(data)
  }
  // in this it will delete the perticular data 
   deleteData(data: Iuser){
    const currentData = this.SendUserData.getValue();
    // have unique id for the perticular data 
    const updatedData = currentData.filter(p => p.Id !== data.Id) 
    this.saveData(updatedData)
   }
}
