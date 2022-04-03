import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/one-piece.interface';
import { OnePieceService } from '../services/one-piece.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent {
  @Input()
  new: Character = {
    name: '',
    power: 0
  }

  constructor(private onePieceService: OnePieceService) {}

  /* @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter(); */

  create() {
    if (this.new.name.trim().length === 0) {return;}
    
    console.log(this.new);
    /* this.onNewCharacter.emit(this.new); */
    this.onePieceService.createCharacters(this.new);
    this.new = {
      name: '',
      power: 0
    };
  }

}
