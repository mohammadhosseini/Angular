import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-edit',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class profileComponent implements OnInit {
User:User;
  constructor(private user: User) {
      this.User = user;
   }

  ngOnInit() {
  }

  defaultColDef= {
    minwidth: 110,
    resizable: true,
    pagination: true,
    
  }
  
  paginationPageSize = 10;

  columnDefsInstall = [
    {headerName: 'Name', field: 'Name'},
    {headerName: 'Product Serial', field: 'ProductSerial'},
    {headerName: 'Lottery Code', field: 'LotteryCode'},
    {headerName: 'Date', field: 'Date'},
    {headerName: 'Product Type', field: 'ProductType'},
    {headerName: 'Quality', field: 'Quality'},
    {headerName: 'Description', field: 'Description'}
  ];

  columnDefsCharge =[
    {headerName: 'Type', field: 'Type'},
    {headerName: 'Used', field: 'Used'},
    {headerName: 'Code', field: 'Code'},
  ]

  // frameworkComponents = {
  //   customizedButton : CustomizedCellComponent
  // }
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

}
