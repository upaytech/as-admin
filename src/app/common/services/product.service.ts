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
  // todo : change type any to a subset of product type, which will include only id and properties
  // that are visible on the grid
  getProducts(): Array<any> {
    // dummy data - return service result instead
    return [{
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
