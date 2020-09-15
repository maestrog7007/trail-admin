import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-trail-grid',
  templateUrl: './trail-grid.component.html',
  styleUrls: ['./trail-grid.component.css']
})
export class TrailGridComponent implements OnInit {

  @Output() recordDeleted = new EventEmitter<any>();
  @Output() newClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();
  @Input() joggingData: Array<any>;
  constructor() { }

  ngOnInit(): void {
  }

  public deleteRecord(record) {
    this.recordDeleted.emit(record);
  }
    
  public editRecord(record) {
    const clonedRecord = Object.assign({}, record);
    this.editClicked.emit(clonedRecord);

  }

  public newRecord() {
    this.newClicked.emit();
  }
}
