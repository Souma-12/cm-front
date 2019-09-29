import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResponsableServiceService {

  private uri = 'http://localhost:8080/api/responsable/';
  headers = new HttpHeaders();
  constructor(public http: HttpClient) { }
  
  getAllResponsable() {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri , options);
  }

  getResponsableByID(id) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri +id, options);
  }

   createResponsable(responsable){
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.post(this.uri,responsable, options);
  }
  deleteResponsable(id){
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.delete(this.uri + id, options);
  }}
