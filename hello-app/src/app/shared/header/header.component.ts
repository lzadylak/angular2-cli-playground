import { Component, OnInit } from '@angular/core';
import { AngularFire} from 'angularfire2';

@Component({
  selector: 'app-shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'ngApp';

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

  ngOnInit() {
  }

}
