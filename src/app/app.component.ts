import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Keyboard } from './models/keyb';
import { DataService } from '../services/data.service';
import { KeybComponent } from "./keyb/keyb.component";
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KeybComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  keyboards: Keyboard[] = [];
  modify: Keyboard | undefined = undefined;
  new: Keyboard | undefined = undefined;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getKeyboards().subscribe({
      next: (data: Keyboard[]) => {
        this.keyboards = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  newKeyboard() {
    this.new = {
      id: uuidv4(),
      name: '',
      switchType: '',
      caseType: '',
      pcbType: '',
      keyboardType: '',
      ergonomic: false,
      keycaps: {
        brand: '',
        material: '',
        process: ''
      },
      backlight: ''
    };
  }

  saveNew(keyboard: Keyboard) {
    this.dataService.addKeyboard(keyboard).subscribe({
      next: (data: Keyboard) => {
        this.keyboards.push(data);
        this.new = undefined;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  modifyKeyboard(keyboard: Keyboard) {
    this.modify = JSON.parse(JSON.stringify(keyboard));
  }

  saveModify(keyboard: Keyboard) {
    this.dataService.modifyKeyboard(keyboard).subscribe({
      next: (data: Keyboard) => {
        const index = this.keyboards.findIndex((k) => k.id === data.id);
        this.keyboards[index] = data;
        this.modify = undefined;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteKeyboard(keyboard: Keyboard) {
    this.dataService.deleteKeyboard(keyboard).subscribe({
      next: () => {
        const index = this.keyboards.findIndex((k) => k.id === keyboard.id);
        this.keyboards.splice(index, 1);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
