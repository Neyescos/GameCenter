import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientComponent } from './Components/add-client/add-client.component';
import { ClientDeleteRequestComponent } from './Components/client-delete-request/client-delete-request.component';
import { ClientListComponent } from './Components/client-list/client-list.component';
import { ClientComponent } from './Components/client/client.component';
import { LoginComponent } from './Components/login/login.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserComponent } from './Components/user/user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
  {path: 'users',component: UserListComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path:'clients',component:ClientListComponent},
  {path:'addclient',component:AddClientComponent},
  {path:'client',component:ClientComponent},
  {path:'deleteclient',component:ClientDeleteRequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
