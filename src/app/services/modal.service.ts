import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private readonly modals: IModal[] = [];

  constructor() {}

  register(id: string) {
    this.modals.push({ id, visible: false });
  }

  isModalVisible(id: string): boolean {
    return (
      this.modals.find((modal: IModal): boolean => modal.id === id)?.visible ??
      false
    );
  }

  toggleModal(id: string): void {
    const modal = this.modals.find((element) => element.id === id);

    if (modal) {
      modal.visible = !modal.visible;
    }
  }
}
