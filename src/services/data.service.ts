import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Keyboard } from '../app/models/keyb';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url = 'http://localhost:3000/keyboards'; // Updated endpoint for keyboards

  constructor(private http: HttpClient) {}

  getKeyboards(): Observable<Keyboard[]> {
    return this.http.get<Keyboard[]>(this.url);
  }

  addKeyboard(keyboard: Keyboard): Observable<Keyboard> {
    return this.http.post<Keyboard>(this.url, keyboard);
  }

  modifyKeyboard(keyboard: Keyboard): Observable<Keyboard> {
    console.log(keyboard);
    return this.http.put<Keyboard>(`${this.url}/${keyboard.name}`, keyboard); // Using 'name' as unique identifier
  }

  deleteKeyboard(keyboard: Keyboard): Observable<void> {
    return this.http.delete<void>(`${this.url}/${keyboard.name}`); // Using 'name' as unique identifier
  }
}
