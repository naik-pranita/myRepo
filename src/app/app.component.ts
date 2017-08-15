import { Component } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'app';
  name = '';
  nameList = [];

  addMe(formvalue) {
    if (formvalue.appname) {
      this.nameList.push(formvalue.appname);
      this.name = '';
    }
    else {
      alert('Cannot be null');
    }
  }

  removeItem(id) {
    this.nameList.splice(id, 1);
  }
  
  resetList() {
    this.nameList = [];
  }
}
