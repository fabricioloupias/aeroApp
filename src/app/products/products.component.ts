import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { Product } from '../class/product';
import { UserService } from 'src/services/user.service';
import { User } from '../class/user';
import { MatSnackBar } from '@angular/material';
import { SnackbarComponent } from '../snackbar/snackbar.component';



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
  products: any
  user: User
  totalMonedas: number
  isLoadingProducts: boolean = false
  isAvailable: boolean

  constructor(private ps: ProductService, private userService: UserService, private snackBar: MatSnackBar) {
    this.isLoadingProducts = true
    this.userService.getUser()
      .subscribe(data => {
        this.isLoadingProducts = false
        this.user = data
        this.totalMonedas = this.user.points

      }, err => {
        console.log(err)
      })
    this.ps.getProducts().subscribe(data => {
      this.products = data
      console.log(this.products)
    })
  }

  ngOnInit() {
  }

  canjear(_id: string) {
    this.ps.exchange(_id)
      .subscribe(data => {
        console.log(data)
        this.snackBar.openFromComponent(SnackbarComponent, {
          data: data.message,
          duration: 2000
        });
      })
  }

  sortToLow() {
    this.sortHighToLow()
  }

  sortToHigh() {
    this.sortLowToHigh()
  }

  private sortHighToLow() {
    return this.products.sort((a, b) => {
      return b.cost - a.cost
    })
  }

  private sortLowToHigh() {
    return this.products.sort((a, b) => {
      return a.cost - b.cost
    })
  }

}
