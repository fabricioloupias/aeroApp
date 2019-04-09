import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { Product } from '../class/product';
import { UserService } from 'src/services/user.service';
import { User } from '../class/user';


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
  user: User
  totalMonedas: number


  constructor(private ps: ProductService, private userService: UserService) {
    this.userService.getUser()
      .subscribe(data => {
        this.user = data
        this.totalMonedas = this.user.points
      })
      
    this.ps.getProducts().subscribe(data => {
      this.products = data
      console.log(this.products)
    })
  }

  ngOnInit() {
  }

  canjear(_id: string){
    console.log(_id)
  }

}
