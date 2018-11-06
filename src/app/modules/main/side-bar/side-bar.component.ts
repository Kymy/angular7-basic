import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.view.html',
  styleUrls: ['./side-bar.style.css']
})
export class SideBarComponent {
  title = 'sidebar';
  activeTab = {
      value: 'users'
  };

  constructor( private router: Router ) { }

  ngOnInit() {
    this.router.navigate(['home/users']);
    this.detectRouteChanges();
  }

  setActive(module) {
    this.activeTab.value = module;
  }

  detectRouteChanges() {
    this.router.events.subscribe((path) => {
      const apath = path['url'];
      if (apath) {
        const myPath: string = apath;
        const arrPath = myPath.split('/');
        this.setActive(arrPath[(arrPath['length']) - 1]);
      }
    });
  }

}
