import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styles: []
})

export class NavComponent {
  isCollapsed = true;
  collapseDropdown = true;
}
