import {
  ApplicationRef,
  Component,
  ComponentRef,
  createComponent,
  EnvironmentInjector,
} from '@angular/core';
import { BackdropComponent } from '../backdrop/backdrop.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  modal = false;
  dialogRef: ComponentRef<BackdropComponent>;

  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector
  ) {}

  showModal() {
    this.dialogRef = createComponent(BackdropComponent, {
      environmentInjector: this.injector,
    });
    document.body.appendChild(this.dialogRef.location.nativeElement);
    this.appRef.attachView(this.dialogRef.hostView);
    this.dialogRef.setInput('colapseModal', this.closeModal);
    this.dialogRef.setInput('title', 'Dynamical works');
  }
  closeModal = () => {
    this.dialogRef.destroy();
  };
}
