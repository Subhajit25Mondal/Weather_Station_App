import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-other-days',
  templateUrl: 'other-days.html',
})
export class OtherDaysPage {

  city = this.navParams.get('city');
  country = this.navParams.get('country');
  lat = this.navParams.get('lat');
  lon = this.navParams.get('lon');




  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
  }

 

}
