import { ServicesService } from './../../services/services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['../../app.Component.css']
})
export class CentralComponent implements OnInit {
  
  public service :Array<string | number> = []

  constructor(private serviceService: ServicesService) { } 

  ngOnInit(): void {
      this.service = this.serviceService.load()
  }

}
