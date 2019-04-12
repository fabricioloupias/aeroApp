import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { Product } from '../class/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  p: number[] = [];

  products: any
  isLoadingProducts: boolean = false
  constructor(private userServive: UserService, private ps: ProductService) {
    this.isLoadingProducts = true
    this.userServive.getHistory()
      .subscribe(data => {
        this.isLoadingProducts = false
        this.products = this.sortByDate(data)
      })
  }

  ngOnInit() {
  }

  byDate(){
    this.sortByDate(this.products)
  }
  
  sortToLow() {
    this.ps.sortHighToLow(this.products)
  }

  sortToHigh() {
    this.ps.sortLowToHigh(this.products)
  }

  private sortByDate(data){
    return data.sort((a, b) => {
      return <any>new Date(b.createDate) - <any>new Date(a.createDate)
    })
  }


}
