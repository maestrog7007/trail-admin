import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-trail-crud',
  templateUrl: './trail-crud.component.html',
  styleUrls: ['./trail-crud.component.css']
})
export class TrailCrudComponent implements OnInit {

  @Output() joggingCreated = new EventEmitter<any>();
  @Input() joggingInfo: any;

  public buttonText = 'Save';

  constructor() {
    this.clearJoggingInfo();
    console.log(this.joggingInfo.date);
  }

  ngOnInit() {

  }

  private clearJoggingInfo = function() {
    // Create an empty jogging object
    this.joggingInfo = {
      id: undefined,
      date: '',
      distanceInMeters: 0,
      timeInSeconds: 0
    };
  };

  public addOrUpdateJoggingRecord = function(event) {
    this.joggingCreated.emit(this.joggingInfo);
    this.clearJoggingInfo();
  };
}
