import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  prodList = ['Pen','pencil'];

  quantity = 1

  showMyProduct(productName: number) {
    if (productName == 1 || productName < 10){
      this.quantity++
        
      }
      else if(productName==10){
Swal.fire("You can Order only 10 products")
      }
    
}

decproduct(product: number){
  if(product < 100 && product > 1){
  this.quantity--
  }
 
}
}
