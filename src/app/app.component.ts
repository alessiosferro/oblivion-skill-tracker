import { Races } from './model/races.model';
import { CharacterService } from './services/character.service';
import { StaticDataService } from './services/static-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from './model/skill.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  skills$: Observable<Skill[]>
  races$: Observable<Races>

  constructor(
    private StaticData: StaticDataService,
    private Player: CharacterService
  ) { }

  ngOnInit() {
    this.skills$ = this.StaticData.getCombatSkills$();
    this.races$ = this.StaticData.getRaces$();

    this.Player.getCharacters$();
  }
}
