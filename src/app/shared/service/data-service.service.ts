import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor(private http: HttpClient) {}

  async getData() {
    const res = await this.http.get<any>('assets/data.json').toPromise();
    const data = await res;
    return data;
  }
}
