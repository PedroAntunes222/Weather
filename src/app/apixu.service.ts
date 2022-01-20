import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

    getWeather(location){

      return this.http.get(
          'http://api.weatherstack.com/current?access_key=caa8d783ed4bfd3353e40dca6ab67673&query=' + location
      );
      
    }

}
