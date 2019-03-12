import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showTree = true;

  constructor() { }

  ngOnInit() {
  }


  firstClick() {
    this.showTree = false;
  }
}
