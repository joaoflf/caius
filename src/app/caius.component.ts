import {Component} from '@angular/core';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HeaderComponent} from './header/header.component';
import {MainContainerComponent} from './main-container/main-container.component';

@Component({
  moduleId: module.id,
  selector: 'caius-app',
  templateUrl: 'caius.component.html',
  styleUrls: ['caius.component.css'],
  directives: [SidebarComponent, HeaderComponent, MainContainerComponent]
})
export class CaiusAppComponent {
  title = 'caius works!';
}
