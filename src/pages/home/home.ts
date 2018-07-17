import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  url = 'http://api.openweathermap.org/data/2.5/weather?lat=23.5204&lon=87.3119&APPID=63a61c83d2406647c0ed9b36cad89d1f';
  weather: Observable<any>;
  city: any;
  country : any;
  temperature : Number;
  icon: any;
  desc: any;
  humidity:any;
  pressure:any;
  windSpeed: any;
  windDir: any;
  
  cDate;
  cDay;
  cYear;
  cMonth;

  constructor(public navCtrl: NavController, public httpClient: HttpClient) {

    this.weather = this.httpClient.get(this.url);
    this.weather
    .subscribe(data => {
      this.city=data.name;
      this.country=data.sys.country;
      this.temperature=(data.main.temp)-273.15;
      this.icon=data.weather[0].icon;
      this.desc=data.weather[0].description;
      this.humidity=data.main.humidity;
      this.pressure=data.main.pressure;
      this.windSpeed=data.wind.speed;
      this.windDir=data.wind.deg;
    });


    this.processTime();
  }


  processTime(){
    var dateObj = new Date();
    var Day=dateObj.getDay().toString();
    this.cDate=dateObj.getDate().toString();
    var Month=dateObj.getMonth();
    this.cYear=dateObj.getFullYear().toString();

    var months =['Jan','Feb','Mar','Apr','Mar','June','July','Aug','Sep','Oct','Nov','Dec'];
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    this.cMonth = months[Month];
    this.cDay=days[Day];

  }

}
