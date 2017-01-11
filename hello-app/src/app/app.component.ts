import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(public af: AngularFire) { }

  login() {
    this.af.auth.login({
      email: "kstw92@gmail.com",
      password: "test12345"
    })
  }

  logout() {
    this.af.auth.logout();
  }

  ngOnInit() { }

}
