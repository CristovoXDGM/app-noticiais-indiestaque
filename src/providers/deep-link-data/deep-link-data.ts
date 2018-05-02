import { Deeplinks } from '@ionic-native/deeplinks';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Configrar a aplicação de maneira correta
@Injectable()
export class DeepLinkDataProvider {

  constructor(public http: HttpClient,private deeplinks: Deeplinks) {
    this.deeplinks.route({}).subscribe((match) => {
      
      console.log('Successfully matched route', match);
    }, (nomatch) => {
      // nomatch.$link - the full link data
      console.error('Got a deeplink that didn\'t match', nomatch);
    });
  }
  
}
