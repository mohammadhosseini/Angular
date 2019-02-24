import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { CustomizedCellComponent } from './customized-cell/customized-cell.component';
import { profileComponent } from './User/profile/profile.component';
import { User } from './User/User';



@NgModule({
  declarations: [
    AppComponent,
    CustomizedCellComponent,
    profileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    AgGridModule.withComponents([CustomizedCellComponent])
  ],
  providers: [User],
  bootstrap: [AppComponent]
})
export class AppModule { }
