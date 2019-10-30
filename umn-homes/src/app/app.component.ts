import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
<<<<<<< HEAD
=======
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
>>>>>>> week10

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
<<<<<<< HEAD
    private statusBar: StatusBar
=======
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router
>>>>>>> week10
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
<<<<<<< HEAD
=======

  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }
>>>>>>> week10
}
