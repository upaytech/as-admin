import { Component, OnInit } from '@angular/core';
import { Product } from '@upay/as-commons';
import { ProductService } from '../common/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements OnInit {

  public products: Array<Product>;

  constructor(
    private productService: ProductService,
    public router: Router
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  /**
   * TODOs
   * 1) add filters
   * 2) add grid operations like sorting and pagination or "infinte scrolling"?
   */

}
