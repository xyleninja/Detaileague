import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-summoner-details',
  templateUrl: 'summoner-details.html'
})
export class SummonerDetailsPage {

  public summoner;
  public selectedSegment = "Overview";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.summoner = this.navParams.data;
  }

}