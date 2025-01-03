import { Component, ElementRef, OnInit, input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  readonly modalID = input('');

  constructor(public modal: ModalService, public el: ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  closeModal(): void {
    this.modal.toggleModal(this.modalID());
  }
}
