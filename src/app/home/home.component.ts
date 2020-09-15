import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { TrailAPIService } from '../services/trail-api.service';
import * as _ from "lodash";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public joggingData: Array<any>;
  public currentJogging: any;
  public isAuthenticated: boolean;
  constructor ( public oktaAuth: OktaAuthService, private workoutService: TrailAPIService) {
    this.oktaAuth.isAuthenticated().then(result => {
      this.isAuthenticated = result;
    });
  
    // subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
    this.currentJogging = this.setInitialValuesForJoggingData();
  }
  
  private setInitialValuesForJoggingData () {
      return {
        id: undefined,
        date: '',
        distanceInMeters: 0,
        timeInSeconds: 0
      }
    }
  
  public createOrUpdateJogging = function(jogging: any) {
      // if jogging is present in joggingData, we can assume this is an update
      // otherwise it is adding a new element
      let joggingWithId;
      joggingWithId = _.find(this.joggingData, (el => el.id === jogging.id));
  
      if (joggingWithId) {
        const updateIndex = _.findIndex(this.joggingData, {id: joggingWithId.id});
        this.workoutService.update(jogging).subscribe(
          joggingRecord =>  this.joggingData.splice(updateIndex, 1, jogging)
        );
      } else {
        this.workoutService.add(jogging).subscribe(
          joggingRecord => this.joggingData.push(jogging)
        );
      }
  
      this.currentJogging = this.setInitialValuesForJoggingData();
    };
  ngOnInit(): void {
  }

  public editClicked = function(record) {
    this.currentJogging = record;
  };

  public newClicked = function() {
    this.currentJogging = this.setInitialValuesForJoggingData(); 
  };

  public deleteClicked(record) {
    const deleteIndex = _.findIndex(this.joggingData, {id: record.id});
    this.workoutService.remove(record).subscribe(
      result => this.joggingData.splice(deleteIndex, 1)
    );
  }

}
