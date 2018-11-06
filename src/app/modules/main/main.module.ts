import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    MainComponent,
    HeaderComponent
  ],
  exports: [
    MainComponent,
    HeaderComponent
  ]
})
export class MainModule {}
