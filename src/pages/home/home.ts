import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//Pages
import { SummonerDetailsPage } from '../summoner-details/summoner-details';

//Providers
import { SummonerProvider } from '../../providers/summoner.provider';

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

  private summonerName;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public summonerProvider: SummonerProvider
    ) {

  }

  send(){

    this.summonerProvider.loadSummonerFromAPI(this.summonerName, this.selectedRegion);
    let summoner = this.summonerProvider.getSummoner();

    if(summoner == undefined){
      //Toast 
      return;
    }

    this.navCtrl.push(SummonerDetailsPage, summoner);
    console.log(this.summonerName);
  }

}
