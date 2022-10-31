/**
 * SWEN 261
 * product-details.component.ts
 *
 * The component that shows the details of a {@link Product product} to the admin
 * This is where an admin is able to change the details of said {@link Product product}
 *
 * Contributors: Team-E
 */

 import { Component, Input, OnInit } from '@angular/core';
 import { ProductService } from '../product.service';
 import { Product } from '../product';
 import { ActivatedRoute, Router } from '@angular/router';
 import { Location } from '@angular/common';

 @Component({
   selector: 'app-product-details',
   templateUrl: './product-details.component.html',
   styleUrls: ['./product-details.component.css']
 })
 export class ProductDetailsComponent implements OnInit {
  @Input() product?: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    public router: Router,
    private location: Location) {
  }

  /**
   * on initialization of this component
   */
  ngOnInit(): void {
    this.getProduct();
  }
/**
   * Gets a specific {@linkplain Product product} to display
   */
 getProduct(): void {
  /**
   * Gets the id from the route to get the product
   */
  const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

  this.productService.getProduct(id)
    .subscribe(product => this.product = product)
}
