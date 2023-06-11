import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SimpleCalculatorService {

  constructor(private http: HttpClient) { }

  add(start:number, amount: number){
    return this.http.get(`https://127.0.0.1:7157/api/SimpleCalculator/add/${start}/${amount}`);
  }

  subtract(start:number, amount: number){
    return this.http.get(`https://127.0.0.1:7157/api/SimpleCalculator/subtract/${start}/${amount}`);
  }

}
