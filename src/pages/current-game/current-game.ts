import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-current-game',
  templateUrl: 'current-game.html'
})
export class CurrentGamePage {

  public currentSummoner = "Mute4win";

  public teamRed = new Array(
    new Object({
      name: "Mute4win",
      champion: "Katarina",
      KDA: "avg. 13/3/7"
    }),
    new Object({
      name: "Hiemta",
      champion: "Darius",
      KDA: "avg. 19/2/1"
    }),
    new Object({
      name: "xyleninja",
      champion: "Elise",
      KDA: "avg. 3/0/14"
    }),
    new Object({
      name: "Bob the Troll",
      champion: "Teemo",
      KDA: " avg.0/33/1"
    }),
    new Object({
      name: "Mid or AFK",
      champion: "Riven",
      KDA: "avg. 0/1/0"
    })
  );

  public teamBlue =new Array(
    new Object({
      name: "Annie Bot",
      champion: "Annie",
      KDA: "4/12/1"
    }),
    new Object({
      name: "Trundle Bot",
      champion: "Trundle",
      KDA: "1/8/5"
    }),
    new Object({
      name: "Cho'gath Bot",
      champion: "Cho'gath",
      KDA: "32/7/0"
    }),
    new Object({
      name: "Ryze Bot",
      champion: "Ryze",
      KDA: "16/3/4"
    }),
    new Object({
      name: "Galio Bot",
      champion: "Galio",
      KDA: "1/0/0"
    })
  );

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

}
