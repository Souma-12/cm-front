import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormationServiceService {
  private uri = 'http://localhost:8080/api/formation/';
  headers = new HttpHeaders();
  constructor(public http: HttpClient) { }
  
  getAllFormation() {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri , options);
  }

  getFormationByID(id) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri +id, options);
  }

   createFormation(formation){
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.post(this.uri,formation, options);
  }
  deleteFormation(id){
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.delete(this.uri + id, options);
  }}
