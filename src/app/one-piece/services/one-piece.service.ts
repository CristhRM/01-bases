import { Injectable } from "@angular/core";
import { Character } from "../interfaces/one-piece.interface";

@Injectable()
export class OnePieceService {
    private characters: Character[] = [{
        name: 'Chopper',
        power: 5000
      }, {
        name: 'Brook',
        power: 6000
      }];

    get charactersPulic(): Character[] {
        return [...this.characters];
    }
      
    constructor() {}

    createCharacters(character: Character) {
        this.characters.push(character);
    }
}