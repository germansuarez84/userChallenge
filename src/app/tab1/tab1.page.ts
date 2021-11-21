import { Component } from '@angular/core';
import{Globals} from '../globals';

import{UsersServiceService} from '../services/users-service.service'; 
import{IonicToastService} from '../services/ionic-toast.service';


interface User{

  name:string;
  genre:string;
  description:string;
  imageURL:string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [Globals]
})
export class Tab1Page {


  //newUser = {name:"", gender:"", description:"", imageURL:"" };
  txtName="";
  lstGender="";
  txtDescription="";
  txtImageURL="";

  userLists:User[];

  constructor(public globals:Globals,
              private wsUsers: UsersServiceService,
              private ionicToastService: IonicToastService) {
                this.userLists=[];
              }

  addUser(){
    
    let newUser = {name:this.txtName, gender:this.lstGender,
                   description:this.txtDescription, 
                   imageURL:this.txtImageURL };
    this.globals.users.push(newUser);
    this.cleanFields();
    //this.userLists.push(newUser);
    this.wsUsers.sendWsObjUser(this.globals.users);
    console.log("Tab 1: Add User");
    console.log(this.globals.users);
    //console.log(this.userLists);
    this.ionicToastService.showToast('Usuario creado');

    
  }

  cleanFields(){
    this.txtName="";
    this.lstGender="Male";
    this.txtDescription="";
    this.txtImageURL="";

  }

  


}
