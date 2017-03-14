import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-summoner-details',
  templateUrl: 'summoner-details.html'
})
export class SummonerDetailsPage {

  public currentSummoner = "Mute4win"
  public selectedSegment = "Champions";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

}