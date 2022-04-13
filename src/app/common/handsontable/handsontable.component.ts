import { Component, Input, OnChanges, OnInit } from '@angular/core';
import Handsontable from 'handsontable';
import { GridSettings } from 'handsontable/settings';

@Component({
  selector: 'handsontable',
  templateUrl: './handsontable.component.html',
  styleUrls: ['./handsontable.component.scss']
})
export class HandsontableComponent implements OnChanges {

  @Input('dataSet') dataset:any[];
  @Input('gridSettings') gridsettings:GridSettings;

  hotSettings:GridSettings;
  hotData:Handsontable;

  constructor() { }

  ngOnChanges(): void {
    this.gridsettings.data=[];
    this.gridsettings.data=this.dataset;
    this.hotSettings=this.gridsettings;
    this.hotData = new Handsontable(document.getElementById("hot-data")!,this.hotSettings);
    // const autoColumnSize = this.hotData.getPlugin('autoColumnSize');
    // this.hotData.updateSettings({
    //   colWidths:(index)=>{
    //     if(index === this.hotData.propToCol('spreadsheetItemDescription')){
    //       return 350;
    //     } else {
    //       autoColumnSize.calculateColumnsWidth(index,0,true);
    //       return autoColumnSize.getColumnWidth(index);
    //     }
    //   }
    // });
  }

}
