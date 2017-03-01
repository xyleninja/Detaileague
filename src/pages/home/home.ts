import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public regions = new Array(
    "BR",
    "EUNE",
    "EUW",
    "JP",
    "KR",
    "LAN",
    "LAS",
    "NA",
    "OCE",
    "TR",
    "RU",
    "PBE"
    );

  public selectedRegion = "EUW";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.regions);
  }

  test(){
    console.log(this.selectedRegion);
  }

}
