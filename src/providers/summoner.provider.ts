import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { ConnectionProvider } from './connection.provider';

/*
  Generated class for the SummonerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SummonerProvider {

  public summoner;

  constructor(public connection: ConnectionProvider) {
    
  }

  loadSummonerFromAPI(summonerName : String, region : String) {
    var h = this;
    
    this.connection.getReqeuest('/api/v1/region/' + region.toLowerCase() + '/summoner/' + summonerName, function (results) {
      console.log(results);
      h.summoner = results;
    });
  }

  getSummoner(){
    return this.summoner;
  }
}
