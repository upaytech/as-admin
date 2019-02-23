import { Component, OnInit, Input } from '@angular/core';
import { ProductListItem } from './model/ProductListItem';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {

  @Input()
  product: ProductListItem;

  constructor() { }

  ngOnInit() {
  }

  goToProductDetails(): void {
    // TODO: Navigate to product details page with product id;
    throw Error('Incomplete method: Navigate to product details page using product id');
  }

}
