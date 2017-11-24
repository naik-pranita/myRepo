import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['./nav.css']
})

export class NavComponent {
  isCollapsed = true;
  collapseDropdown = true;
}
