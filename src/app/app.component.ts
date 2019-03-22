import { Component } from '@angular/core';
import { ProductListItem } from './product-list-item/product-list-item/model/ProductListItem';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apnasaamaan admin';
  sampleProduct: ProductListItem = {
    id: Math.random() * 12 + '',
    name: 'product name',
    description: 'in ipsum dorel inimit.lorem ipsum dorel inimit.lorem ipsum dorel inimit.lorem ipsum dorel inimit.',
    imgurl: 'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image'
  };

  constructor() {
  }
}
