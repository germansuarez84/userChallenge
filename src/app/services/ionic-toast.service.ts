import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonicToastService {

  private myToast: any;

  constructor(private toast: ToastController) { }

showToast(customMessage){

  this.myToast= this.toast.create({
    message: customMessage,
    duration: 2000
  }).then((toastData)=>{
    console.log(toastData);
    toastData.present();
  });
}

hideToast(){
  this.myToast = this.toast.dismiss();
}

}


