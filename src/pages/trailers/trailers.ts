import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@Component({
  selector: 'page-trailers',
  templateUrl: 'trailers.html'
})
export class TrailersPage {

  constructor(public navCtrl: NavController, private youtube: YoutubeVideoPlayer) {
  }

  goToVideo(){
    this.youtube.openVideo('m1YJGrT8JSw&t=63s');
  }
  
}
