import { Races } from './core/model/races.model';
import { CharacterService } from './core/services/character.service';
import { StaticDataService } from './core/services/static-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Skill } from './core/model/skill.model';
import { Character } from './core/model/character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isFormDisplayed = false;

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

    this.characters$ = this.Character.getCharacters$()
    this.character$ = new BehaviorSubject<Character>(null);
  }

  onCreateCharacter(character: Character) {
    this.Character.storeCharacter(character);

    this.isFormDisplayed = false;
  }
}
