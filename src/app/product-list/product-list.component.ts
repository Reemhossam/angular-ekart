import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
product=
{
name : "iphone 16",
price  : 999,
color : "black",
discount : 10,
instock:1
}
getdiscountedprice(){
  return (this.product.price - (this.product.price * this.product.discount/100))
}
}
