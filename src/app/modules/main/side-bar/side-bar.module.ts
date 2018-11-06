import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users/users.service';
import { BooksComponent } from './books/books.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { MatDialogModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [
    SideBarComponent,
    UsersComponent,
    BooksComponent,
    AddUserComponent
  ],
  exports: [
    SideBarComponent,
    UsersComponent,
    BooksComponent,
    AddUserComponent
  ],
  entryComponents: [
    AddUserComponent,
  ],
  providers: [
    UsersService,
  ],
})
export class SideBarModule {}
