import { Skills, Skill } from './../model/skill.model';
import { SeederService } from './seeder.service';
import { Races } from './../model/races.model';
import { PlayerStatic } from './../model/player-static.model';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';
import { map, share, shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {


  constructor(
    private Firestore: AngularFirestore,
    private Seeder: SeederService
  ) { }

  getStaticPlayer$() {
    return this.Firestore
      .collection('static')
      .doc<PlayerStatic>('player')
      .valueChanges()
      .pipe(
        tap(playerStatic => this.seedData(playerStatic)),
        shareReplay(1)
      );
  }

  private seedData(playerStatic: PlayerStatic) {
    const {
      skills,
      races,
      attributes
    } = playerStatic;

    if (!skills) {
      this.Seeder.seedSkills();
    }

    if (!races) {
      this.Seeder.seedRaces();
    }

    if (!attributes) {
      this.Seeder.seedAttributes();
    }
  }

  getAllSkills$(): Observable<Skill[]> {
    const staticPlayer$ = this.getStaticPlayer$();

    return staticPlayer$.pipe(
      map(playerStatic => {
        const {
          combat,
          magic,
          stealth
        } = playerStatic.skills;

        return [
          ...combat,
          ...magic,
          ...stealth
        ];
      }),
      shareReplay(1)
    );
  }

  getSkills$(): Observable<Skills> {
    const staticPlayer$ = this.getStaticPlayer$();

    return staticPlayer$.pipe(
      map(playerStatic => playerStatic.skills),
      shareReplay(1)
    );
  }

  getRaces$(): Observable<Races> {
    const staticPlayer$ = this.getStaticPlayer$();

    return staticPlayer$.pipe(
      map(playerStatic => playerStatic.races)
    );
  }

  getCombatSkills$(): Observable<Skill[]> {
    return this.getSkills$().pipe(
      map(skills => skills.combat)
    );
  }

  getMagicSkills$(): Observable<Skill[]> {
    return this.getSkills$().pipe(
      map(skills => skills.magic)
    );
  }

  getStealthSkills$(): Observable<Skill[]> {
    return this.getSkills$().pipe(
      map(skills => skills.stealth)
    );
  }
}