import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';
import { UsersComponent } from './users/users.component';
import { BooksComponent } from './books/books.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    SideBarComponent,
    UsersComponent,
    BooksComponent
  ],
  exports: [
    SideBarComponent,
    UsersComponent,
    BooksComponent
  ]
})
export class SideBarModule {}
