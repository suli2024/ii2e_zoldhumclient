import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpapiService {

  constructor(private http: HttpClient) { }

  getEmployees() {
    const url = 'http://localhost:8000/api/employees';
    return this.http.get(url);
  }

  addEmployee(emp: any){
    const url = 'http://localhost:8000/api/employees';
    return this.http.post(url, emp, {headers: this.makeHeader()});
  }
  makeHeader() {
    const token = localStorage.getItem('token');
    const header = { 'Authorization': 'Bearer ' + token }
    return header
  }
}
