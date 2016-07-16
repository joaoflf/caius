import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'caius-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }
}
