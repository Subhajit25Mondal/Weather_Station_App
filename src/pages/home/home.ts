import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weather: Observable<any>;
  city: any;
  country : any;

  constructor(public navCtrl: NavController, public httpClient: HttpClient) {

    this.weather = this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?lat=23.5204&lon=87.3119&APPID=63a61c83d2406647c0ed9b36cad89d1f');
    this.weather
    .subscribe(data => {
      this.city=data.name;
      this.country=data.sys.country;
    })

  }

}
