import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private tostar:ToastrService) { }
  showSuccess(message, title){
    this.tostar.success(message, title)
  }
  showError(message, title){
    this.tostar.error(message, title)
  }
  showInfo(message, title){
    this.tostar.info(message, title)
  }
  showWarning(message, title){
    this.tostar.warning(message, title)
  }

}
