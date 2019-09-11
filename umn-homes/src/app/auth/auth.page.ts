import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  imgUrl;
  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.imgUrl = "https://cdn.dribbble.com/users/79571/screenshots/4407347/swingvy_all_illustrations.png"
    console.log(this.imgUrl);
  }

  onLogin(){
    this.authService.login();
    this.router.navigateByUrl('/places/tabs/discover')
  }

}
