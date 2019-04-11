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
  redeeming: boolean
  indexLoader: number
  p: number[] = [];

  constructor(private ps: ProductService, private userService: UserService, private snackBar: MatSnackBar) {
    this.isLoadingProducts = true
    this.userService.getUser()
      .subscribe(data => {
        this.isLoadingProducts = false
        this.user = data
        this.totalMonedas = this.user.points
      }, err => {
        console.error(err)
      })
    this.ps.getProducts().subscribe(data => {
      this.products = data
    })
  }

  ngOnInit() {
  }

  canjear(_id: string, i: number) {
    this.redeeming = true
    this.indexLoader = i
    this.ps.exchange(_id)
      .subscribe(data => {
        this.redeeming = false
        this.snackBar.openFromComponent(SnackbarComponent, {
          data: data.message,
          duration: 2000
        })
          .afterDismissed()
          .subscribe(() => {
            window.location.reload()
          })
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
