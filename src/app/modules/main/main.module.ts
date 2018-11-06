import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    SideBarComponent,
  ],
  exports: [
    MainComponent,
    HeaderComponent,
    SideBarComponent
  ]
})
export class MainModule {}
