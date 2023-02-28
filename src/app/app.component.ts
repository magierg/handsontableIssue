import { Component, OnInit } from '@angular/core';
import Handsontable from 'handsontable';
import { GridSettings } from 'handsontable/settings';
declare var $:any;

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
  message='';
  
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
      fixedColumnsLeft:4,
      colHeaders:['First Name','Last Name','Gender','Street','Tooltip','City','State','Country','Zip'],
      columns:[
        {data:'firstName',type:'text',readOnly:true},
        {data:'lastName',type:'text',readOnly:true},
        {data:'gender',type:'text',readOnly:true},
        {data:'street',type:'text',readOnly:false,
          validator: function(value,callback){
              console.log("validator>this.row>",this.row);
              console.log("validator>this.instance.getData>",this.instance.getData(this.row));
              callback(true);
          }
        },
        {data:'tooltip',
        renderer:function(instance,td,row,col,prop,value,cellProperties){
          //Handsontable.renderers.TextRenderer.apply(this,arguments);
          let id=value;
          td.innerHTML=`<i class="fa fa-warning htPill htCenter" data-tooltip='tooltip' id="${id}"
          data-placement='left' title="this is is a tooltip issue, when the tooltip is still open but you scroll down, the tooltip is moved to the upper right corner of the screen.">`;
          $('.htPill').tooltip({html:true});
          let selector='#'+id;
          // $(selector).mouseenter(function(event:any){
          //   $(event.target).tooltip('show');
          // });
          // $(selector).mouseleave(function(event:any){
          //   $(event.target).tooltip('hide');
          // });
          },
        afterOnCellMouseOver:function(e,coords,TD){
          console.log("mouse over.");
          },
        afterOnCellMouseOut:function(){
          console.log("move out.");
        }
        },
        {data:'city',type:'text',readOnly:false},
        {data:'state',type:'text',readOnly:false},
        {data:'country',type:'text',readOnly:false},
        {data:'zip',type:'text',readOnly:false},
      ],
      hiddenColumns:{columns:this.hiddenColumns()}
    };

    let temp=[];
    for(let i = 0;i<1000;i++){
      temp.push({
        firstName:Math.floor(10000000 + Math.random() * 9000),
        lastName:(i<200)?'Lopez '+Math.random():'',
        gender:'Male'+Math.random(),
        street:'68484 MyStreet in this road '+Math.random(),
        tooltip:Math.random(),
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
    this.message="data change is in progress...";
    let temp=[];
    for(let i = 0;i<10000;i++){
      temp.push({
        firstName:'Marian '+Math.random(),
        lastName:'Dodson '+Math.random(),
        gender:'Female'+Math.random(),
        street:'89765 MyStreet in this road'+Math.random(),
        tooltip:Math.random(),
        city:'this is my city for testing purposes, this line needs to be very long, so we can get the horizontal scrolling going.',
        state:'this is my state for testing purposes, this line needs to be very long, so we can get the horizontal scrolling going.',
        country:'this is my country for testing purposes, this line needs to be very long, so we can get the horizontal scrolling going.',
        zip:'this is my zip for testing purposes, this line needs to be very long, so we can get the horizontal scrolling going.'
      });
    }
    this.dataset=temp;
    this.message='data change completed';
  }
}
