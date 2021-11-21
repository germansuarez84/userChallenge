import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  private wsObjUser = new BehaviorSubject<{}>({});
  private wsSelectedUser= new BehaviorSubject<{}>({});
  $getwsObjUser = this.wsObjUser.asObservable();
  $getwsSelectedUser = this.wsSelectedUser.asObservable();

  constructor() { }

  sendWsObjUser(data:any){
    this.wsObjUser.next(data);
  }

  sendWsSelectedUser(data:any){
    this.wsSelectedUser.next(data);
  }
}
