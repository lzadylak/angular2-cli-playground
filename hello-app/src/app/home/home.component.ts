import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.categories = af.database.list('/api/v1/categories');
   }

  ngOnInit() {
  }

}
