import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {ModalComponent} from '../modal/modal.component';
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";

@Component({
  moduleId: module.id,
  selector: 'caius-item-wizard',
  templateUrl: 'item-wizard.component.html',
  styleUrls: ['item-wizard.component.css'],
  directives: [ModalComponent, SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES]
})
export class ItemWizardComponent implements OnInit {

  @Output() closeWizard: EventEmitter<any> = new EventEmitter();
  @Input() isModalVisible: boolean = false;
  constructor() {}

  ngOnInit() {
  }

}
