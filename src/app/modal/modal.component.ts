import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'caius-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }
}
