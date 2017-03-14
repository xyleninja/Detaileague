import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Pages
import { HomePage } from '../pages/home/home';
import { CurrentGamePage } from '../pages/current-game/current-game';
import { SummonerDetailsPage } from '../pages/summoner-details/summoner-details';

//Providers
import { SummonerProvider } from '../providers/summoner.provider';
import { ConnectionProvider } from '../providers/connection.provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CurrentGamePage,
    SummonerDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CurrentGamePage,
    SummonerDetailsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SummonerProvider,
    ConnectionProvider
    ]
})
export class AppModule {}
