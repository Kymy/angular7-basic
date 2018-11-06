import { Component } from '@angular/core';

@Component({
  selector: 'users',
  templateUrl: './users.view.html',
  styleUrls: ['./users.style.css', '../side-bar.style.css']
})
export class UsersComponent {
  title = 'users';
  users = [
    {name: 'Jon', lastname: 'Stark', age: 23, email: 'stark@stark.com'},
    {name: 'Sansa', lastname: 'Stark', age: 15, email: 'sansa@stark.com'},
    {name: 'Arya', lastname: 'Stark', age: 10, email: 'arya@stark.com'},
    {name: 'Ricky', lastname: 'Stark', age: 5, email: 'ricky@starc.com'},
    {name: 'Jamie', lastname: 'Lannister', age: 23, email: 'jamie@lannister.com'},
    {name: 'Cersei', lastname: 'Lannisted', age: 23, email: 'cersei@lannister.com'},
    {name: 'Anne', lastname: 'Hodor', age: 22, email: 'annie@hodor.com'},
    {name: 'Hodor', lastname: 'Hodor', age: 23, email: 'hodor@hodor.com'},
  ];

}
