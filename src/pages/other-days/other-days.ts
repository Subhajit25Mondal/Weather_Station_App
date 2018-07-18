import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-other-days',
  templateUrl: 'other-days.html',
})
export class OtherDaysPage {

  city = this.navParams.get('city');
  country = this.navParams.get('country');
  id = this.navParams.get('id');
  url = 'http://api.openweathermap.org/data/2.5/forecast?id='+this.id+'&cnt=5&APPID=63a61c83d2406647c0ed9b36cad89d1f';
  weather: Observable<any>;





  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {

    this.weather = this.httpClient.get(this.url);
    this.weather
    .subscribe(data => {
      console.log(data);
      
    });

  }

 

}
