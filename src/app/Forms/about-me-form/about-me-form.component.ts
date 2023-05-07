import {Component, OnInit} from '@angular/core';
import {ChangeService} from "../../change.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NotificationService} from "../../http/notification.service";

@Component({
  selector: 'app-about-me-form',
  templateUrl: './about-me-form.component.html',
  styleUrls: ['./about-me-form.component.css']
})
export class AboutMeFormComponent implements OnInit {
  constructor(private formBuilder:FormBuilder,private notificationService:NotificationService){}
  form:FormGroup=this.formBuilder.group({
  description:['',Validators.required],
  age:['',[Validators.required,Validators.min(18),Validators.pattern('[0-9]*')]],
  email:['',[Validators.required,Validators.email]],
  phone:['',[Validators.required,Validators.pattern('[0-9]{8}')]],
  address:['',[Validators.required]],
  language:['',[Validators.required]],
})
  ngOnInit(){
  }
  onSubmit() {
    if(this.form.invalid){
      this.notificationService.showError('Please fill all the details !!', 'Error');
      return;
    }
    console.log("onSubmit")
    console.log(this.form.value);
    this.notificationService.showSuccess('Data shown successfully !!', 'Success');
  }
}
