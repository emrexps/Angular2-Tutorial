import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  private messageSource = new BehaviorSubject('');
  private fromTofasToContainerSource=new BehaviorSubject('');
  private fromPoloToContainerSource=new BehaviorSubject('')

  dataToTofas = this.messageSource.asObservable();
  tofasDataToContainer=this.fromTofasToContainerSource.asObservable();
  poloDataToContainerSource=this.fromPoloToContainerSource.asObservable();


  constructor() { }

  sendDataToTofas(message: string) {
    this.messageSource.next(message)
  }
  sendDataToComponentFromTofas(message:string){
   this.fromTofasToContainerSource.next(message)
  }

  sendDataToComponentFromPolo(message:string){
      this.fromPoloToContainerSource.next(message)
  }

}
