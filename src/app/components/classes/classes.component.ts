import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html'
})
export class ClassesComponent implements OnInit {

  alert: string = "alert-danger";
  loading: boolean = false;

  properties: object = {
    danger: true
  }

  constructor() { }

  ngOnInit() {
  }

  executeSaving(){
    this.loading = true;

    setTimeout(() => {
      this.loading = false
    }, 3000);
  }

}
