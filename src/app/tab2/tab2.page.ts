import { Component, OnInit } from '@angular/core';
import{Globals} from '../globals';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers:[Globals]
})
export class Tab2Page implements OnInit {

  users:any;
  constructor(public globals:Globals) {}

  ngOnInit(){
    this.users=this.globals.users;
    console.log("En tab 2");
    console.log(this.users);
  }

  showUsers(){
    console.log(this.globals.users);
  }

}
