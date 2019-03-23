import { Injectable } from '@angular/core';
import { Product } from '@upay/as-commons';
import { HttpClient } from '@angular/common/http';
import { Center } from '@upay/as-commons/dist/lib/models/upay-centers';
import { ProductState } from '@upay/as-commons/dist/lib/models/product-state';
import { ProductCategory } from '@upay/as-commons/dist/lib/models/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  // todo : fetch products from backend service
  getProducts(): Array<Product> {
    // dummy data - return service result instead
    return [{
      name: 'abc',
      description: 'jsk ksjf vkhjkhdf',
      price: 123.45,
      quantity: 2,
      upayCenter: Center.PUNE,
      state: ProductState.READY,
      category: ProductCategory.OTHER,
      imageUrls: []
    },
    {
      name: 'abc 2',
      description: 'jsk ksjf vkhjkhdf',
      price: 123.45,
      quantity: 2,
      upayCenter: Center.NAGPUR,
      state: ProductState.PUBLISHED,
      category: ProductCategory.OTHER,
      imageUrls: []
    },
    {
      name: 'abc 3',
      description: 'jsk ksjf vkhjkhdf',
      price: 123.45,
      quantity: 2,
      upayCenter: Center.NAGPUR,
      state: ProductState.PUBLISHED,
      category: ProductCategory.OTHER,
      imageUrls: []
    },
    {
      name: 'abc 4',
      description: 'jsk ksjf vkhjkhdf',
      price: 123.45,
      quantity: 2,
      upayCenter: Center.NAGPUR,
      state: ProductState.PUBLISHED,
      category: ProductCategory.OTHER,
      imageUrls: []
    },
    {
      name: 'abc 5',
      description: 'jsk ksjf vkhjkhdf',
      price: 123.45,
      quantity: 2,
      upayCenter: Center.NAGPUR,
      state: ProductState.PUBLISHED,
      category: ProductCategory.OTHER,
      imageUrls: []
    }];
  }
}
