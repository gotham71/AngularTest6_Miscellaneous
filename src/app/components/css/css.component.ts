import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      Scope CSS only for this component!! (I will be red!)
    </p>
  `,
  styles: [`
    p{
      color: red;
      font-size: 20px;
      margin-top: 30px;
    }
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
