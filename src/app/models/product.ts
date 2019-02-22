import { Center } from './upay-centers';
import { ProductState } from './product-state';

export class Product {
    name: string;
    description: string;
    price: number;
    quantity: number;
    upayCenter: Center;
    imageUrls: Array<string>;
    state: ProductState;
}
