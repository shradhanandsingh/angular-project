import { Component, OnInit } from '@angular/core';
import { ToasterServiceService } from './toaster-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-sassy-app';
  bsValue = new Date();
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  httpdata;

  constructor(private toastrservice: ToasterServiceService, private http: HttpClient){

  }


  Success(){
    this.toastrservice.Success("Success button clicked")
  }
  Info(){
    this.toastrservice.Info("Info button click")
  }

  Warning(){
    this.toastrservice.Warning("Warning button clicked")
  }
   Error(){
     this.toastrservice.Error("Error button click")
   }

   ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
  //  this.selectedItems = [
   //   { item_id: 3, item_text: 'Pune' },
     // { item_id: 4, item_text: 'Navsari' }
  //  ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };

    this.http.get("http://jsonplaceholder.typicode.com/users").subscribe((data) => this.displaydata(data));
   }
   displaydata(data){
     this.httpdata = data;
   }
  // onItemSelect(item: any) {
  //  console.log(item);
 // }
//  onSelectAll(items: any) {
 //   console.log(items);
 // }

}
