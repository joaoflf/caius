import {Component} from '@angular/core';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MainContainerComponent} from './main-container/main-container.component';
import { FIREBASE_PROVIDERS } from 'angularfire2';


@Component({
  selector: 'caius-app',
  templateUrl: 'caius.component.html',
  styleUrls: ['caius.component.scss'],
  providers: [FIREBASE_PROVIDERS],
  directives: [SidebarComponent, MainContainerComponent]
})
export class CaiusAppComponent {
  title = 'caius works!';
}
