import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
name:string="Reem Hossam";
product=
{
name : "iphone 16",
price  : 999,
color : "black",
discount : 10,
instock:1,
pImage:"../../assets/1727880149116.jpg"
}
getdiscountedprice(){
  return (this.product.price - (this.product.price * this.product.discount/100))
}
onNameChange(event:any){
  this.name =event.target.value;
}
}
