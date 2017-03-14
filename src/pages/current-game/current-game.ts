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
      champion: "Katarina"
    }),
    new Object({
      name: "Hiemta",
      champion: "Darius"
    }),
    new Object({
      name: "xyleninja",
      champion: "Elise"
    }),
    new Object({
      name: "Bob the Troll",
      champion: "Teemo"
    }),
    new Object({
      name: "Mid or AFK",
      champion: "Riven"
    })
  );

  public teamBlue =new Array(
    new Object({
      name: "Annie Bot",
      champion: "Annie"
    }),
    new Object({
      name: "Trundle Bot",
      champion: "Trundle"
    }),
    new Object({
      name: "Cho'gath Bot",
      champion: "Cho'gath"
    }),
    new Object({
      name: "Ryze Bot",
      champion: "Ryze"
    }),
    new Object({
      name: "Galio Bot",
      champion: "Galio"
    })
  );

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

}
