import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['../../app.Component.css']
})
export class CentralComponent implements OnInit {

  public id  :number = 0
  public msg :string = ''

  public load(id :number, msg :string):void {}

  constructor() { }

  ngOnInit(): void {
    // this.load()
  }

}
