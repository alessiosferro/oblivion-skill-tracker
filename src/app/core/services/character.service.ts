import { StaticDataService } from './static-data.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from "@angular/core";
import { Character } from '../model/character.model';
import { tap, map, filter } from 'rxjs/operators';
import { Skill } from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private FireStore: AngularFirestore,
    private StaticData: StaticDataService
  ) { }

  getCharacters$(): Observable<Character[]> {
    return this.FireStore
      .collection<Character>('characters')
      .snapshotChanges()
      .pipe(
        map(characters => {
          return characters.map(char => {
            const id = char.payload.doc.id;
            const data = char.payload.doc.data();

            return {
              id,
              ...data
            }
          })
        })
      )
  }

  storeCharacter(character: Character): void {
    const minorSkills$ =
      this.getMinorSkills$(character);

    minorSkills$
      .pipe(
        tap(minor =>
          character.minor = minor
        )
      ).subscribe(() => {
        this.FireStore
          .collection('characters')
          .add({ ...character });
      })
  }

  getMinorSkills$(character: Character) {
    const allSkills$ = this.StaticData
      .getAllSkills$();

    return allSkills$.pipe(
      map(skills => {
        return skills.filter((skill) => {
          for (const major of character.major) {
            if (skill.name === major.name) {
              return false;
            }
          }
          return true;
        }) as Skill[];
      })
    );
  }

  removeCharacter(characterId: string): void {
    this.FireStore
      .collection('characters')
      .doc(characterId)
      .delete();
  }
}