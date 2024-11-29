import { Routes } from '@angular/router';
import { MainComponentComponent } from '../../core/script/main-component/main-component.component';
import { UserTableComponent } from '../../core/script/user-table/user-table.component';

export const routes: Routes = [

    {   
        path:'stepperForm',
        component: MainComponentComponent
        
    },
    {   
        path:'admin',
        component:UserTableComponent 
    },

];

