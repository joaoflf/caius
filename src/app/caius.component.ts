import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@Component({
  moduleId: module.id,
  selector: 'caius-app',
  templateUrl: 'caius.component.html',
  styleUrls: ['caius.component.css'],
  directives: [SidebarComponent, HeaderComponent]
})
export class CaiusAppComponent {
  title = 'caius works!';
}
