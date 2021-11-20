import { Injectable } from "@angular/core";

interface User{

    name:string;
    genre:string;
    description:string;
    imageURL:string;
}
@Injectable()
export class Globals{
    users: User[]=[];

}