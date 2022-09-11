import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../../app.Component.css']
})
export class FooterComponent implements OnInit {

  public title :string = '2021 gccp-app have all rights reserved.'

  constructor() { }

  ngOnInit(): void {
  }

}
