import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { OtherDaysPage } from '../other-days/other-days';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lat: any = 23.5204;
  lon: any = 87.3119;

  url = 'http://api.openweathermap.org/data/2.5/weather?lat='+this.lat+'&lon='+this.lon+'&APPID=63a61c83d2406647c0ed9b36cad89d1f';
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
  id: any;
  
  cDate;
  cDay;
  cYear;
  cMonth;

  constructor(public navCtrl: NavController, public httpClient: HttpClient, public loadingCtrl: LoadingController) {

    this.weather = this.httpClient.get(this.url);
    this.weather
    .subscribe(data => {
      this.city= data.name;
      this.country= data.sys.country;
      this.temperature=(data.main.temp)-273.15;
      this.icon= data.weather[0].icon;
      this.desc= data.weather[0].description;
      this.humidity= data.main.humidity;
      this.pressure= data.main.pressure;
      this.windSpeed= data.wind.speed;
      this.windDir= data.wind.deg;
      this.id= data.id;
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
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    this.cMonth = months[Month];
    this.cDay=days[Day];

  }

  otherDays() {

    const loader = this.loadingCtrl.create({
      content: "Loading...",
      duration: 900
    });
    loader.present();
  

    this.navCtrl.push(OtherDaysPage,{
      'id':this.id,
      'city':this.city,
      'country':this.country
    });
  }

}
