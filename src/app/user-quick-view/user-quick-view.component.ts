import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsersServiceService} from '../services/users-service.service';

@Component({
  selector: 'app-user-quick-view',
  templateUrl: './user-quick-view.component.html',
  styleUrls: ['./user-quick-view.component.scss'],
})
export class UserQuickViewComponent implements OnInit {
  userSelected:any;
  genderIcon:string;
  constructor(private router:Router,
              private wsUsers:UsersServiceService) { 

              }

  ngOnInit() {
    this.wsUsers.$getwsSelectedUser.subscribe(wsObjectData =>{
      console.log(wsObjectData);
      this.userSelected=wsObjectData;
      switch(this.userSelected.gender)
      {case 'Male':this.genderIcon='male';break;
       case 'Female':this.genderIcon='female';break;
       case 'Other':this.genderIcon='male-female';break;}
    })

  }

  goBackToUsers(){
    this.router.navigate(['']);
  }

}
