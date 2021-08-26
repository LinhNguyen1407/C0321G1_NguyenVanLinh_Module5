import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;
  id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.id = Number(this.activatedRoute.snapshot.params.id);
    this.product = this.productService.findById(this.id);
  }

  ngOnInit(): void {
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.router.navigateByUrl('/product/list');
  }
}
