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
      this.products = products.filter(p => {
        return p.inMyCart
      })
    })
  }

  sum(){
    let result  = 0
    for(let p of this.products){
      result += (p.quantity * p.price)
    }

    return result
  }

}