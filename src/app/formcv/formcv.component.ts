import { Component } from '@angular/core';
import { ChangeService } from '../change.service';
@Component({
  selector: 'app-formcv',
  templateUrl: './formcv.component.html',
  styleUrls: ['./formcv.component.css']
})
export class FormcvComponent {
constructor(private change:ChangeService){}
aboutme:any
data:{
  
  age:number,
  email:any,
  phone:number,
  adress:any,
  skills:{skill:string,level:number},
  experience:{where:string,dated:string,datef:string,message:string},
  education:any,
  portfolio:any,
  contact:any

}


send(){
this.change.data=this.aboutme     

}

}
