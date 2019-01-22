import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser,
    splashScreen: SplashScreen
    ) {

      splashScreen.hide();
this.abrir();
  }



abrir(){
  const options: InAppBrowserOptions = {
    zoom: 'no',
    location: 'no'
  }
  const browser = this.iab.create('http://www.massagista.nelsonmoraes.com.br/', '_blank', options);
}


}
