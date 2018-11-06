import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { LoginComponent } from './modules/login/login.component';
import * as AppBundle from './app.bundle';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    FormsModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    AppBundle.MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
