import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CurseLitsComponent } from './curses/curse-lits.component';
import { starComponent } from './star/star.component';


@NgModule({
  declarations: [
    AppComponent,
    CurseLitsComponent,
    starComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
