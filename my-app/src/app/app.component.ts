import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';

  defaultColDef= {
    width: 110,
    resizable: true
  }
  

  columnDefs = [
    {headerName: 'CreateDate', field: 'CreateDate'},
    {headerName: 'Name', field: 'Name'}, 
    {headerName: 'UserName', field: 'UserName'},
    {headerName: 'PhoneNumber', field: 'PhoneNumber'},
    {headerName: 'PostalCode', field: 'PostalCode'},
    {headerName: 'Address', field: 'Address'},
    {headerName: 'Birthday', field: 'Birthday'},
    {headerName: 'City', field: 'City'},
    {headerName: 'Work_Tel', field: 'Work_Tel'},  
    {headerName: 'Register_Step', field: 'Register_Step' },
    {headerName: 'LastMessageId', field: 'LastMessageId' },
    {headerName: 'LastSendMessage', field: 'LastSendMessage'},  
    {headerName: 'Registered', field: 'Registered' },
    {headerName: 'Experience', field: 'Experience' }, 
    {headerName: 'Score', field: 'Score'},
    {headerName: 'Chance', field: 'Chance'},  
    {headerName: 'Star', field: 'Star' },
    {headerName: 'RefrenceID', field: 'RefrenceID'},  
    {headerName: 'RefrenceDate', field: 'RefrenceDate' }
  
  ];


  rowData:any = [];

  constructor(private http: HttpClient) {

  }

   ngOnInit() {
    this.http.post('http://setaregan.datis-elevator.ir/api/User/GetAllUsers',null).subscribe((data) => {
    this.rowData = data;
    console.log(data)});
  }
}
