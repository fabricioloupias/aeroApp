import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { Product } from '../class/product';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  products: Product
  isLoadingProducts: boolean = false
  constructor(private userServive: UserService) { 
    this.isLoadingProducts = true
    this.userServive.getHistory()
      .subscribe(data => {
        this.isLoadingProducts = false
        this.products = data
        console.log(data)
      })
  }

  ngOnInit() {
  }

}
