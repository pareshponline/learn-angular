import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

const API_URL = 'https://reqres.in';

@Injectable({
  providedIn: 'root'
})
export class MyapiService {
  constructor(private myapi: HttpClient) {}

  public fetchData(url = 'users?page=2'): Observable<any> {
    return this.myapi.get(API_URL + '/api/' + url).pipe(map(res => res));
  }
}
