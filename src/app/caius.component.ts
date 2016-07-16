import {Component} from '@angular/core';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MainContainerComponent} from './main-container/main-container.component';
import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';

@Component({
  moduleId: module.id,
  selector: 'caius-app',
  templateUrl: 'caius.component.html',
  styleUrls: ['caius.component.css'],
  directives: [SidebarComponent, MainContainerComponent, StoreLogMonitorComponent]
})
export class CaiusAppComponent {
  title = 'caius works!';
}
