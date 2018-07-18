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
  daycode = this.navParams.get('day');

  days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  dayshow1 = this.days[this.daycode];
  dayshow2 = this.days[this.daycode +1];
  dayshow3 = this.days[this.daycode+2];
  dayshow4 = this.days[this.daycode+3];
  dayshow5 = this.days[this.daycode+5];

  day1; day2; day3; day4; day5;
  temp1d; temp1n; temp2d; temp2n; temp3d; temp3n; temp4d; temp4n; temp5d; temp5n;
  icon1d; icon2d; icon3d; icon4d; icon5d; icon1n; icon2n; icon3n; icon4n; icon5n;
  desc1d; desc2d; desc3d; desc4d; desc5d; desc1n; desc2n; desc3n; desc4n; desc5n;



  url = 'http://api.openweathermap.org/data/2.5/forecast?id='+this.id+'&APPID=63a61c83d2406647c0ed9b36cad89d1f';
  weather: Observable<any>;



  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {

    this.weather = this.httpClient.get(this.url);
    this.weather
    .subscribe(data => {
      
      this.day1=data.list[0].dt_txt;
      this.day2=data.list[8].dt_txt;
      this.day3=data.list[16].dt_txt;
      this.day4=data.list[24].dt_txt;
      this.day5=data.list[32].dt_txt;

    });

  }

 

}
