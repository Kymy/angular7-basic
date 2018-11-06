import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersService } from './users.service';

@Component({
  selector: 'users',
  templateUrl: './users.view.html',
  styleUrls: ['./users.style.css', '../side-bar.style.css']
})
export class UsersComponent {
  title = 'users';
  users;

  constructor(public dialog: MatDialog, public usersService: UsersService ) {
    this.users = usersService.getUsers();
  }

  openAddUserDialog() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '260px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
