import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import{MatSelectModule} from '@angular/material/select';
import{MatButtonModule} from '@angular/material/button';
import{MatChipsModule} from '@angular/material/chips';
import { from } from 'rxjs';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserComponent } from './Components/user/user.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { ClientComponent } from './Components/client/client.component';
import { ClientListComponent } from './Components/client-list/client-list.component';
import { AddClientComponent } from './Components/add-client/add-client.component';
import {MatTableModule} from '@angular/material/table';
import { ClientDeleteRequestComponent } from './Components/client-delete-request/client-delete-request.component';
import { DeviceComponent } from './Components/device/device.component';
import { DeviceListComponent } from './Components/device-list/device-list.component';
import { AddDeviceComponent } from './Components/add-device/add-device.component';
import { DeviceDeleteRequestComponent } from './Components/device-delete-request/device-delete-request.component';
import { PlayingSpaceListComponent } from './Components/playing-space-list/playing-space-list.component';
import { PlayingSpaceComponent } from './Components/playing-space/playing-space.component';
import { AddPlayingSpaceComponent } from './Components/add-playing-space/add-playing-space.component';
import { PlayingSpaceDeleteRequestComponent } from './Components/playing-space-delete-request/playing-space-delete-request.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserListComponent,
    UserComponent,
    ClientListComponent,
    AddClientComponent,
    ClientComponent,
    ClientDeleteRequestComponent,
    DeviceComponent,
    DeviceListComponent,
    AddDeviceComponent,
    DeviceDeleteRequestComponent,
    PlayingSpaceListComponent,
    PlayingSpaceComponent,
    AddPlayingSpaceComponent,
    PlayingSpaceDeleteRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatChipsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
