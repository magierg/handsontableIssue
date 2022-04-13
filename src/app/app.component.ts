import { Component, OnInit } from '@angular/core';
import Handsontable from 'handsontable';
import { GridSettings } from 'handsontable/settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'handsontableIssue';
  hotData:Handsontable;
  hotSettings:GridSettings;
  dataset:any[]=[];
  
  ngOnInit(){
    this.hotSettings ={
      data:this.dataset,
      columnSorting:true,
      licenseKey:'non-commercial-and-evaluation',
      rowHeaders:true,
      filters:true,
      height:500,
      width:'100%',
      stretchH:'all',
      search:true,
      rowHeights:'24px',
      fixedColumnsLeft:2,
      colHeaders:['First Name','Last Name','Gender','Street','City','State','Country','Zip'],
      columns:[
        {data:'firstName',type:'text',readOnly:false},
        {data:'lastName',type:'text',readOnly:false},
        {data:'gender',type:'text',readOnly:false},
        {data:'street',type:'text',readOnly:false},
        {data:'city',type:'text',readOnly:false},
        {data:'state',type:'text',readOnly:false},
        {data:'country',type:'text',readOnly:false},
        {data:'zip',type:'text',readOnly:false},
      ],
      hiddenColumns:{columns:this.hiddenColumns()}
    }

    let temp=[];
    for(let i = 0;i<99000;i++){
      temp.push({
        firstName:'Chriso '+Math.random(),
        lastName:'Lopez '+Math.random(),
        gender:'Male'+Math.random(),
        street:'68484 MyStreet in this road '+Math.random(),
        city:'this is my city for testing purposes, this line needs to be very long, so we can get the horizontal scrolling going.',
        state:'this is my state for testing purposes, this line needs to be very long, so we can get the horizontal scrolling going.',
        country:'this is my country for testing purposes, this line needs to be very long, so we can get the horizontal scrolling going.',
        zip:'this is my zip for testing purposes, this line needs to be very long, so we can get the horizontal scrolling going.'
      });
    }
    this.dataset=temp;

  }

  hiddenColumns(){
    return [2];
  }

  changeData(){
    let temp=[];
    for(let i = 0;i<99000;i++){
      temp.push({
        firstName:'Marian '+Math.random(),
        lastName:'Dodson '+Math.random(),
        gender:'Female'+Math.random(),
        street:'89765 MyStreet in this road'+Math.random(),
        city:'this is my city for testing purposes, this line needs to be very long, so we can get the horizontal scrolling going.',
        state:'this is my state for testing purposes, this line needs to be very long, so we can get the horizontal scrolling going.',
        country:'this is my country for testing purposes, this line needs to be very long, so we can get the horizontal scrolling going.',
        zip:'this is my zip for testing purposes, this line needs to be very long, so we can get the horizontal scrolling going.'
      });
    }
    this.dataset=temp;
  }
}
