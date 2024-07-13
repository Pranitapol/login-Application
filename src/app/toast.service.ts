import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasterMessage: any = new Subject();
  userLogged = new BehaviorSubject<boolean>(false);
  //successMessage:Observable<any>
  constructor() {
    //this.successMessage=this.toasterMessage.asObservable()
  }

  showToaster(message: any) {
    console.log(message);
    this.toasterMessage.next(message);
  }
  dismissTOast() {
    this.toasterMessage.next(null);
  }
}
