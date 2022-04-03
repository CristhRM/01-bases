import { Component } from '@angular/core';
import { Character } from '../interfaces/one-piece.interface';
import { OnePieceService } from '../services/one-piece.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  new: Character = {
    name: 'Nami',
    power: 2000
  }

  constructor() { }
}
