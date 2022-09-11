import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../app.Component.css']
})
export class HomeComponent implements OnInit {

  public title :string = "Welcome to Gccp App"

  constructor() { }

  ngOnInit(): void {}

}
