import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  selectedProduct = null
  constructor(private ShoppingService: ShoppingService, private route: ActivatedRoute) { }

  ngOnInit() {
    const productId = this.route.snapshot.params.productId
    this.ShoppingService.products.subscribe(products => {
      this.selectedProduct = products.filter(p => {
        return p.id === parseInt(productId)
      })[0]
    })
  }

}
