import { Component, OnInit } from '@angular/core';
import{Globals} from '../globals';
import {UsersServiceService} from '../services/users-service.service';
import { NavController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers:[Globals, NavController, NavParams]
})
export class Tab2Page implements OnInit {

  users:any;
  UsersList:any;
  constructor(public globals:Globals,
              private wsUsers:UsersServiceService,
              public navCtrl:NavController, 
              public params: NavParams,
              private router:Router) {}

  ngOnInit(){

    this.wsUsers.$getwsObjUser.subscribe(wsUsersData  =>{
      this.UsersList=wsUsersData;
      console.log("Tab 2, ngOnInit-servicio")
      console.log(this.UsersList);
    })


    this.users=this.globals.users;
    console.log("ngOnInit");
    console.log(this.users);
  }

  public showUsers(){
    
    this.wsUsers.$getwsObjUser.subscribe(wsUsersData  =>{
      this.UsersList=wsUsersData;
      console.log("Tab 2: showUsers");
      console.log(this.UsersList);
     // console.log(this.globals.users);
      
      
    })
  }

  userQuickView(user:any){
    this.wsUsers.sendWsSelectedUser(user);
    this.router.navigate(['/user-Quickview']);
   // console.log(user);
  }

  ionViewDidLoad(){
     console.log("Evento ionViewDidLoad");
  }

}
