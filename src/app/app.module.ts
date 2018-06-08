import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UsersComponent} from './users/users.component';
import {HttpModule} from '@angular/http';
import {HoverDirective} from './hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
