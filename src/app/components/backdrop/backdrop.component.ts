import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss'],
})
export class BackdropComponent {
  @Input() title = 'Hello modal';
  @Input() colapseModal: Function = () => {};
  @Output() handleClose = new EventEmitter<void>();
}
