import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { SideBarModule } from './side-bar/side-bar.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    SideBarModule,
    CommonModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
  ],
  exports: [
    MainComponent,
    HeaderComponent,
  ]
})
export class MainModule {}
