import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './side-bar.component';

@NgModule({
  imports: [
    RouterModule,
  ],
  declarations: [
    SideBarComponent,
  ],
  exports: [
    SideBarComponent,
  ]
})
export class SideBarModule {}
