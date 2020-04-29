import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private Http:HttpClient) { }

  url = "http://localhost:8080/list"

  getList(num: string){
    return this.Http.post<any>(this.url, num)
  }
}
