import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientComponent } from './Components/add-client/add-client.component';
import { AddDeviceComponent } from './Components/add-device/add-device.component';
import { AddOrderComponent } from './Components/add-order/add-order.component';
import { AddPlayingSpaceComponent } from './Components/add-playing-space/add-playing-space.component';
import { ClientDeleteRequestComponent } from './Components/client-delete-request/client-delete-request.component';
import { ClientListComponent } from './Components/client-list/client-list.component';
import { ClientComponent } from './Components/client/client.component';
import { DeviceListComponent } from './Components/device-list/device-list.component';
import { DeviceComponent } from './Components/device/device.component';
import { LoginComponent } from './Components/login/login.component';
import { OrderDeleteRequestComponent } from './Components/order-delete-request/order-delete-request.component';
import { OrderListComponent } from './Components/order-list/order-list.component';
import { OrderComponent } from './Components/order/order.component';
import { PlayingSpaceDeleteRequestComponent } from './Components/playing-space-delete-request/playing-space-delete-request.component';
import { PlayingSpaceListComponent } from './Components/playing-space-list/playing-space-list.component';
import { PlayingSpaceComponent } from './Components/playing-space/playing-space.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserComponent } from './Components/user/user.component';
import { PlayngSpaceListService } from './playng-space-list.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
  {path: 'users',component: UserListComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path:'clients',component:ClientListComponent},
  {path:'addclient',component:AddClientComponent},
  {path:'client',component:ClientComponent},
  {path:'deleteclient',component:ClientDeleteRequestComponent},
  {path:'device',component:DeviceComponent},
  {path:'devices',component:DeviceListComponent},
  {path:'adddevice',component:AddDeviceComponent},
  {path:'space',component:PlayingSpaceComponent},
  {path:'playingspaces',component:PlayingSpaceListComponent},
  {path:'addplayingspace',component:AddPlayingSpaceComponent},
  {path:'deletespacerequest',component:PlayingSpaceDeleteRequestComponent},
  {path:'orders',component:OrderListComponent},
  {path:'order',component:OrderComponent},
  {path:'addorder',component:AddOrderComponent},
  {path:'deleteorderrequest',component:OrderDeleteRequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
