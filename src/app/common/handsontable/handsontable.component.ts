import { Component, Input, OnChanges, OnInit } from '@angular/core';
import Handsontable from 'handsontable';
import { countFirstRowKeys } from 'handsontable/helpers';
import { GridSettings } from 'handsontable/settings';

@Component({
  selector: 'handsontable',
  templateUrl: './handsontable.component.html',
  styleUrls: ['./handsontable.component.scss']
})
export class HandsontableComponent implements OnChanges {

  @Input('dataSet') dataset:any[];
  @Input('gridSettings') gridsettings:GridSettings;
  initialized=false;

  hotSettings:GridSettings;
  hotData:Handsontable;

  constructor() { }

  ngOnChanges(): void {
    console.log('ngOnChanges>dataset>',this.dataset);
    this.gridsettings.dropdownMenu={
      items:{
        "filter_by_value":{
          hidden:()=>{
            console.log("filter_by_value>",this.hotData?.getSelectedRangeLast());
            return [0].indexOf(this.hotData?.getSelectedRangeLast()?.to.col!)>-1;
          }
        },
        "filter_by_condition":{
          hidden:()=>{
            return [0].indexOf(this.hotData?.getSelectedRangeLast()?.to.col!)>-1;
          }
        },
        "filter_action_bar":{
          hidden:()=>{
            return [0].indexOf(this.hotData?.getSelectedRangeLast()?.to.col!)>-1;
          }
        }
      }
    };
    this.hotSettings=this.gridsettings;
    if(!this.initialized){
      console.log(this.hotSettings);
      this.hotSettings.data = this.dataset;
      this.hotData = new Handsontable(document.getElementById("hot-data")!,this.hotSettings);
      this.initialized = true;
    }
    else
      this.hotData.loadData(this.dataset);
    
    const autoColumnSize = this.hotData.getPlugin('autoColumnSize');
    this.hotData.updateSettings({
      colWidths:(index)=>{
        if(index === this.hotData.propToCol('spreadsheetItemDescription')){
          return 350;
        } else {
          autoColumnSize.calculateColumnsWidth(index,0,true);
          return autoColumnSize.getColumnWidth(index);
        }
      }
    });
  }

}
