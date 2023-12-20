import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
@Input() error: any
@Output() close=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClose(){
    this.close.emit();
  }
}


