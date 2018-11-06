import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { MatDialogRef} from '@angular/material';


@Component({
  selector: 'add-user',
  templateUrl: './add-user.view.html',
  styleUrls: ['./add-user.style.css']
})
export class AddUserComponent {

    constructor(public usersService: UsersService, public dialogRef: MatDialogRef<AddUserComponent> ) {
    }

    user = {};

    createUser() {
        this.usersService.addUser(this.user);
        this.dialogRef.close();
    }

}
