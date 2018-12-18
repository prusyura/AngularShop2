import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product
  @Output() eventProduct =new EventEmitter();
  
  constructor(private dataService: DataService) { }
  
  sendEvent(){
    this.eventProduct.emit()
  }
  removeProduct(item){
    console.log(item);
    this.dataService.removeProduct(item).subscribe(data =>{
      console.log(data);
      this.sendEvent();
    })
  }
  ngOnInit() {
  }

}
