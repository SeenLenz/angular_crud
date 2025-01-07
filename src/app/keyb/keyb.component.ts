import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Keyboard } from '../models/keyb';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [],
  templateUrl: './keyb.component.html',
  styleUrl: './keyb.component.scss',
})
export class KeybComponent {
  @Input() model: Keyboard | undefined = undefined;
  @Output() saved = new EventEmitter<Keyboard>();

  getValue(event: any): string {
    return event.target.value;
  }

  getBooleanValue(event: any): boolean {
    return event.target.value === 'true';
  }

  save() {
    this.saved.emit(this.model);
  }
}
