import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiURI: string = "https://jsonplaceholder.typicode.com/users";
  constructor(
    private http: HttpClient
  ) { }


  getAllUsers(){
    return this.http.get<any[]>(this.apiURI);
  }

  getAllProducts(){
    return this.http.get<Product[]>(this.apiURI);
  }

  // getProductById(id: string){
  //   return this.http.get<Product>(`${this.apiURI}/${id}`)
  // }
}
