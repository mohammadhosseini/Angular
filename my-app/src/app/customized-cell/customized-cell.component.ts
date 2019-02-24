import { Component, OnInit } from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-customized-cell',
  templateUrl: './customized-cell.component.html',
  styleUrls: ['./customized-cell.component.css']
})
export class CustomizedCellComponent implements OnInit {

  private cellValue:any;
  constructor() { }

  ngOnInit() {
  }
  agInit(params:any){
    this.cellValue = params.value
  }
  refresh(params:any):boolean{
    this.cellValue = params.value
    return true;
  }

}
