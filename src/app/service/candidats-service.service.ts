import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CandidatsServiceService {
  private uri = 'http://localhost:8080/api/candidats/';
  headers = new HttpHeaders();
  constructor(public http: HttpClient) { }
  
  getAllCandidats() {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri , options);
  }

  getCandidatsByID(id) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri +id, options);
  }

   createCandidats(candidats){
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.post(this.uri, candidats, options);
  }
  deleteCandidats(id){
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.delete(this.uri + id, options);
  }}