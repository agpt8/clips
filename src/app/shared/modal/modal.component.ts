import { Component, ElementRef, OnInit, input, inject } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  modal = inject(ModalService);
  el = inject(ElementRef);

  readonly modalID = input('');

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  closeModal(): void {
    this.modal.toggleModal(this.modalID());
  }
}
