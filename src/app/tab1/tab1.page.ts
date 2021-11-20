import { Component } from '@angular/core';
import{Globals} from '../globals';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [Globals]
})
export class Tab1Page {

  newUser = {name:"", genre:"", description:"", imageURL:"" };

  constructor(public globals:Globals) {}

  addUser(){
    
    this.globals.users.push(this.newUser)
    console.log(this.globals.users);
    
  }

}
