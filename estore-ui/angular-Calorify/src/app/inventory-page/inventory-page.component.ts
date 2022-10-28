/**
 * SWEN 261
 * inventory.component.ts
 *
 * The component that showcases the inventory
 *
 * Contributors: Team-E
 */

 import { Component, OnInit } from '@angular/core';
 import { Product } from '../product';
 import { ProductService } from '../product.service';

 @Component({

   selector: 'app-inventory',
   templateUrl: './inventory.component.html',
   styleUrls: ['./inventory.component.css']
 })
 export class InventoryComponent implements OnInit {
   inventory: Product[] = [];
   constructor(private productService: ProductService) { }

   /**
   * Initialization of this comopnent
   */
  ngOnInit(): void {
    this.getInventory();
  }

  /**
   * Retrieves the inventory and saves it in order to be displayed
   */
  getInventory(): void {
    this.productService.getProducts()
      .subscribe(inventory => this.inventory = inventory);
  }
