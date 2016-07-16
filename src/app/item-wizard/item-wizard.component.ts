import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {ModalComponent} from '../modal/modal.component';

@Component({
  moduleId: module.id,
  selector: 'caius-item-wizard',
  templateUrl: 'item-wizard.component.html',
  styleUrls: ['item-wizard.component.css'],
  directives: [ModalComponent]
})
export class ItemWizardComponent implements OnInit {

  @Output() closeWizard: EventEmitter<any> = new EventEmitter();
  @Input() isModalVisible: boolean = false;
  constructor() {}

  ngOnInit() {
  }

}
