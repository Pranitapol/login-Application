import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasterMessage:any = new Subject();
  //successMessage:Observable<any>
  constructor() { 
    //this.successMessage=this.toasterMessage.asObservable()
  }

  showToaster(message:any){
    console.log(message);
    this.toasterMessage.next(message)
  }
  dismissTOast(){
    this.toasterMessage.next(null)
  }
}
