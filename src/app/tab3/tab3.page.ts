import { Component } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  products = []

  constructor(private ShoppingService: ShoppingService) {}

  ngOnInit(){
    this.ShoppingService.products.subscribe(products => {
      this.products = products.filter(p => {
        return p.inMyCart
      })
    })
  }

  onDelete(id){
    this.ShoppingService.removeFromCart(parseInt(id))
  }

}
