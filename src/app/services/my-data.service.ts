import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class MyDataService {
  constructor(private http: HttpClient) {}
  getData(){
    return this.http.get(
      'http://localhost:3000/users'
    );
  }

  private baseURL = `http://localhost:3000`

  postData(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/user-create`, data)
  }

  deleteData(user: any): Observable<any> {
    const options = {
      body: user
    };
    return this.http.delete(`${this.baseURL}/user-delete`, options);
  }

  updateData(user: any): Observable<any> {
    return this.http.put(`${this.baseURL}/user-update`, user);
  }

}
