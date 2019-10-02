import { Component } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
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
