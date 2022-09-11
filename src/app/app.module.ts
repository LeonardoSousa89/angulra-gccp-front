import { CentralComponent } from './message/central/central.component';
import { FooterComponent } from './message/footer/footer.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Components
import { HomeComponent } from './message/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CentralComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
