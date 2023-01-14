import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = 'http://localhost:3000/productList/';
  constructor(private http: HttpClient) {}

  postProduct(data: any) {
    return this.http.post<any>(this.apiUrl, data);
  }

  getProduct() {
    return this.http.get(this.apiUrl);
  }

  putProduct(data: any, id: number) {
    return this.http.put<any>(this.apiUrl + id, data);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.apiUrl + id);
  }
}
