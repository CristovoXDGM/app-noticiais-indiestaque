import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

@Component({
  selector: 'page-notifica-es',
  templateUrl: 'notifica-es.html'
})
export class NotificaEsPage {

  constructor(public navCtrl: NavController, private push:Push) {
    this.push.hasPermission()
  .then((res: any) => {

    if (res.isEnabled) {
      alert('We have permission to send push notifications');


      this.push.createChannel({
        id: "testchannel1",
        description: "My first test channel",
        // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
        importance: 5
       }).then(() => console.log('Channel created'));
       
       // Delete a channel (Android O and above)
       this.push.deleteChannel('testchannel1').then(() => console.log('Channel deleted'));
       
       // Return a list of currently configured channels
       this.push.listChannels().then((channels) => console.log('List of channels', channels))
       
       // to initialize push notifications
       
       const options: PushOptions = {
          android: {
            senderID:'1084794536323'
          },
          ios: {
              alert: 'true',
              badge: true,
              sound: 'false'
          },
          windows: {},
          browser: {
              pushServiceURL: 'http://push.api.phonegap.com/v1/push'
          }
       };

       const pushObject: PushObject = this.push.init(options);

       pushObject.on('notification').subscribe((notification: any) =>  {
         alert(notification.message);
       });

       pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

       pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

    } else {
      alert('We do not have permission to send push notifications');
       }

    });

  }
  
}
