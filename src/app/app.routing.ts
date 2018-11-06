import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { MainComponent } from './modules/main/main.component';
import { UsersComponent } from './modules/main/side-bar/users/users.component';
import { BooksComponent } from './modules/main/side-bar/books/books.component';

const routes: Routes = [
    { path: '', component:  LoginComponent },
    { path: 'home', component: MainComponent,
        children: [
            { path: 'users', component: UsersComponent },
            { path: 'books', component: BooksComponent },
        ] },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' }) ],
    exports: [ RouterModule ]
})

export class AppRouting {}
