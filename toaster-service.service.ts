import { Injectable } from '@angular/core';
declare var toastr:any;

@Injectable({
  providedIn: 'root'
})
export class ToasterServiceService {

  constructor() {
    this.setting()
   }

  Success(title: string, message?:string){
    toastr.success(title, message);
  }

  Warning(title:string,message?:string){
    toastr.warning(message, title)
  }
  Error(message:string, title?:string){
    toastr.error(message,title)
  }
  Info(message:string){
    toastr.info(message)
  }

  setting(){
    toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-bottom-full-width",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
  }
 
}
