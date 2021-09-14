import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path:"admin",
    component:AdminComponent
  },
  {
    path:"addProdRoute",
    component:AdminComponent
  },
  /* {
    path:"**",
    redirectTo:"admin" //delete this when mergin and add back after
  }, */
  {
    path:"",
    redirectTo:"admin",
    pathMatch:"full"
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
