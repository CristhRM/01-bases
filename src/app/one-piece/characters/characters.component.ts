import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/one-piece.interface';
import { OnePieceService } from '../services/one-piece.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent {
  /* @Input() characters: Character[] = []; */

  get characters(): Character[] {
    return this.onePieceService.charactersPulic;
  }

  constructor(private onePieceService: OnePieceService) {}
}
