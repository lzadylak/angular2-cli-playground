import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.products = af.database.list('/api/v1/products');
   }

  ngOnInit() {
  }

}
