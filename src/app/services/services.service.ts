import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private server: Array<string| number>=[
    'testando for no @injectable service para requisições http'
  ]

  // public id  :number = 0
  // public msg :string = ''

  constructor() { }
  
  public load() {
      return this.server
    }

}
