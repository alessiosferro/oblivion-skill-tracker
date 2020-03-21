import { tap } from 'rxjs/operators';
import { Races } from './model/races.model';
import { CharacterService } from './services/character.service';
import { StaticDataService } from './services/static-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Skill } from './model/skill.model';
import { Character } from './model/character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isFormDisplayed = false;
  public isCharacterDisplayed = false;
  public isRemoveConfirmDisplayed: boolean[] = [];
  private characterId: string;

  public characters$: Observable<Character[]>
  public skills$: Observable<Skill[]>
  public races$: Observable<Races>
  public character$: BehaviorSubject<Character>;

  constructor(
    private StaticData: StaticDataService,
    public Character: CharacterService
  ) { }

  ngOnInit() {
    this.skills$ = this.StaticData.getAllSkills$();
    this.races$ = this.StaticData.getRaces$();

    this.characters$ = this.Character
      .getCharacters$()
      .pipe(
        tap(characters => characters.forEach(() => {
          this.isRemoveConfirmDisplayed.push(false)
        }))
      )

    this.character$ = new BehaviorSubject<Character>(null);
  }

  onFormSubmit(character: Character) {
    this.Character.storeCharacter(character);
    this.isFormDisplayed = false;
  }

  onDisplayDetail(character: Character) {
    this.isCharacterDisplayed = true;
    this.character$.next(character);
  }

  onCharacterRemove(index: number, characterId: string) {
    this.characterId = characterId;
    this.isRemoveConfirmDisplayed[index] = true;
  }

  onRemoveConfirm(index, confirm: boolean) {
    if (confirm) {
      this.Character.removeCharacter(this.characterId);
    }

    this.characterId = null;
    this.isRemoveConfirmDisplayed[index] = false;
  }
}
