import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CustomizedCellComponent } from './customized-cell/customized-cell.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  
  defaultColDef= {
    width: 110,
    resizable: true,
    pagination: true,
    
  }

  paginationPageSize = 10;
  
  frameworkComponents = {
    customizedButton : CustomizedCellComponent
  }
  columnDefs = [
    {headerName: 'Operation', field: 'Operation' , cellRenderer: 'customizedButton'},
    {headerName: 'Selected', field: 'Selected'},
    {headerName: 'ID', field: 'ID'},
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
    {headerName: 'Registered', field: 'Registered' },
    {headerName: 'Cash', field: 'Cash' },
    {headerName: 'Experience', field: 'Experience' }, 
    {headerName: 'Score', field: 'Score'},
    {headerName: 'Chance', field: 'Chance'},  
    {headerName: 'Star', field: 'Star' },
    {headerName: 'InstallCount', field: 'InstallCount' },
    {headerName: 'BlockByAdmin', field: 'BlockByAdmin' },
    {headerName: 'BlockByUser', field: 'BlockByUser' },
    {headerName: 'RefrenceID', field: 'RefrenceID'},  
    {headerName: 'RefrenceDate', field: 'RefrenceDate' }
  
  ];
  
  rowData =[
    {
      "Selected": false,
      "ID": 2041,
      "CreateDate": "1397/04/07",
      "Name": "حسن صفرزاده ",
      "PhoneNumber": "09355705096",
      "City": "بابل",
      "Registered": true,
      "Cash": 0,
      "Experience": 30,
      "Score": 0,
      "Chance": 0,
      "Star": 0,
      "InstallCount": 3,
      "BlockByAdmin": false,
      "BlockByUser": false,
      "RefrenceID": null,
      "AllUserCount": 1599,
      "ActiveUserCount": 1144,
      "AppUserCount": 700,
      "UniqueAppUserCount": 422
  },
  {
      "Selected": false,
      "ID": 2042,
      "CreateDate": "1397/04/08",
      "Name": "عیسی پهلوان",
      "PhoneNumber": "09120317178",
      "City": null,
      "Registered": false,
      "Cash": 0,
      "Experience": 0,
      "Score": 0,
      "Chance": 0,
      "Star": 0,
      "InstallCount": 0,
      "BlockByAdmin": false,
      "BlockByUser": false,
      "RefrenceID": null,
      "AllUserCount": 1599,
      "ActiveUserCount": 1144,
      "AppUserCount": 700,
      "UniqueAppUserCount": 422
  },
  {
    "Selected": false,
    "ID": 2041,
    "CreateDate": "1397/04/07",
    "Name": "حسن صفرزاده ",
    "PhoneNumber": "09355705096",
    "City": "بابل",
    "Registered": true,
    "Cash": 0,
    "Experience": 30,
    "Score": 0,
    "Chance": 0,
    "Star": 0,
    "InstallCount": 3,
    "BlockByAdmin": false,
    "BlockByUser": false,
    "RefrenceID": null,
    "AllUserCount": 1599,
    "ActiveUserCount": 1144,
    "AppUserCount": 700,
    "UniqueAppUserCount": 422
},
{
    "Selected": false,
    "ID": 2042,
    "CreateDate": "1397/04/08",
    "Name": "عیسی پهلوان",
    "PhoneNumber": "09120317178",
    "City": null,
    "Registered": false,
    "Cash": 0,
    "Experience": 0,
    "Score": 0,
    "Chance": 0,
    "Star": 0,
    "InstallCount": 0,
    "BlockByAdmin": false,
    "BlockByUser": false,
    "RefrenceID": null,
    "AllUserCount": 1599,
    "ActiveUserCount": 1144,
    "AppUserCount": 700,
    "UniqueAppUserCount": 422
},
{
  "Selected": false,
  "ID": 2041,
  "CreateDate": "1397/04/07",
  "Name": "حسن صفرزاده ",
  "PhoneNumber": "09355705096",
  "City": "بابل",
  "Registered": true,
  "Cash": 0,
  "Experience": 30,
  "Score": 0,
  "Chance": 0,
  "Star": 0,
  "InstallCount": 3,
  "BlockByAdmin": false,
  "BlockByUser": false,
  "RefrenceID": null,
  "AllUserCount": 1599,
  "ActiveUserCount": 1144,
  "AppUserCount": 700,
  "UniqueAppUserCount": 422
},
{
  "Selected": false,
  "ID": 2042,
  "CreateDate": "1397/04/08",
  "Name": "عیسی پهلوان",
  "PhoneNumber": "09120317178",
  "City": null,
  "Registered": false,
  "Cash": 0,
  "Experience": 0,
  "Score": 0,
  "Chance": 0,
  "Star": 0,
  "InstallCount": 0,
  "BlockByAdmin": false,
  "BlockByUser": false,
  "RefrenceID": null,
  "AllUserCount": 1599,
  "ActiveUserCount": 1144,
  "AppUserCount": 700,
  "UniqueAppUserCount": 422
}
  ]

  // rowData:User[] = [];

  // constructor(private http: HttpClient) {

  // }

  //  ngOnInit() {
  //   this.http.post('http://setaregan.datis-elevator.ir/api/User/GetAllUsers',null).subscribe((data:User) => {
  //   this.rowData = data;
  //   console.log(data)});
  // }
}
