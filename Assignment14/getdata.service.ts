import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  data: Object;

  getData() {
    return this.data;
  }
  

  constructor(public http: HttpClient) { }

  getMyData1() {
    return this.http.get("http://jsonplaceholder.typicode.com/users/1");
  }

  getMyData2() {
    return this.http.get("http://jsonplaceholder.typicode.com/posts?userId=1");
  }

}
