import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { ProductDetailsComponent} from '../product-details/product-details.component';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products: IProduct[] = [];
  filter: string = '';

  constructor(
    private cartSvc: CartService, 
    private productSvc: ProductService,
    private router: Router,
    private route:ActivatedRoute
  ) {}

  ngOnInit() {
    this.productSvc.getProducts().subscribe(products => {
      this.products = products;
    });
    this.route.params.subscribe((params) => {
      this.filter = params['filter'] ?? '';
    })
  }
  addToCart(product:IProduct) {
    this.cartSvc.add(product);
    this.router.navigate(['cart']);
  }

  getFilteredProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter((product) => product.category === this.filter);
  }


}
