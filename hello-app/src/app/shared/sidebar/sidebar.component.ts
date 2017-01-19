import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  categories: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.categories = af.database.list('/api/v1/categories');
   }

  ngOnInit() {
  }

}
