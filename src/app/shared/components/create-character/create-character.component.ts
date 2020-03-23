import { Character } from '../../../core/model/character.model';
import { Skill } from '../../../core/model/skill.model';
import { Observable } from 'rxjs';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Races } from 'src/app/core/model/races.model';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})
export class CreateCharacterComponent {
  @Input()
  races$: Observable<Races>;

  @Input()
  skills$: Observable<Skill[]>

  @Output()
  createCharacter = new EventEmitter<Character>();

  @Output()
  cancel = new EventEmitter<void>();
}
