import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { Product } from '../class/product';


export interface FormData {
  name: string;
  page: number;
  display: boolean;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product



  constructor(private ps: ProductService) {

    this.ps.getProducts().subscribe(data => {
      this.products = data
      console.log(this.products)
    })
  }

  ngOnInit() {
  }


}
