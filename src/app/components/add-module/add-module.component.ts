import { Component } from '@angular/core';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css']
})
export class AddModuleComponent {
  showModal = false;


  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onModalClick(event: MouseEvent) {
    this.closeModal();
  }
  

}
