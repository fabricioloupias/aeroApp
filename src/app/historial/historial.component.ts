import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { Product } from '../class/product';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  p: number[] = [];

  products: any
  isLoadingProducts: boolean = false
  constructor(private userServive: UserService) { 
    this.isLoadingProducts = true
    this.userServive.getHistory()
      .subscribe(data => {
        this.isLoadingProducts = false
        this.products = this.sortByDate(data)
      })
  }

  ngOnInit() {
  }

  private sortByDate(data) {
    return data.sort((a, b) => {
      return <any>new Date(b.createDate) - <any>new Date(a.createDate)
    })
  }

}
