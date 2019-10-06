import { Component } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  products = []
  
  constructor(private ShoppingService: ShoppingService) {}
  
  ngOnInit(){
    this.ShoppingService.products.subscribe(products => {
      this.products = products.filter(product => {
        return product.inMyCart
      })
    })
  }

  sum(){
    let result  = 0
    for(let product of this.products){
      result += (product.quantity * product.price)
    }

    return result
  }

}