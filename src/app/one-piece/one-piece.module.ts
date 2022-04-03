import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { CharactersComponent } from './characters/characters.component';
import { CreateComponent } from './create/create.component';
import { OnePieceService } from './services/one-piece.service';

@NgModule({
  declarations: [
    MainPageComponent,
    CharactersComponent,
    CreateComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    OnePieceService
  ]
})
export class OnePieceModule { }
