import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
})
export class PopUpComponent implements OnInit {
  @Input() error: any;
  @Input() successMessage: any;
  @Output() close = new EventEmitter();
  message: any;
  constructor() {}

  ngOnInit(): void {
    this.message = this.error ? this.error : this.successMessage;
  }
  onClose() {
    this.close.emit();
  }
}
