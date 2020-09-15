import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrailAPIService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://localhost:44333/api/Workouts/';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8', "Access-Control-Allow-Origin": window.location.href});
  }

  public get() {
    // Get all jogging data
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }

  public add(payload) {
    return this.http.post(this.accessPointUrl, payload, {headers: this.headers});
  }

  public remove(payload) {
    return this.http.delete(this.accessPointUrl + '/' + payload.id, {headers: this.headers});
  }

  public update(payload) {
    return this.http.put(this.accessPointUrl + '/' + payload.id, payload, {headers: this.headers});
  }
}
