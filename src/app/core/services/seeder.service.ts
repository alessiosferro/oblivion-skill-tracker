import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';
import getCombatSkills from '../../shared/utils/get-combat-skills';
import getMagicSkills from '../../shared/utils/get-magic-skills';
import getStealthSkills from '../../shared/utils/get-stealth-skills';
import getRaces from '../../shared/utils/get-races';
import getAttributes from '../../shared/utils/get-attributes';

@Injectable({
  providedIn: 'root'
})
export class SeederService {
  staticPlayer$ = this.FireStore
    .collection('static')
    .doc('player');

  constructor(
    private FireStore: AngularFirestore
  ) { }

  public seedAttributes() {
    const attributes = getAttributes();

    this.staticPlayer$.update({ attributes });
  }

  public seedSkills() {
    const combat = getCombatSkills();
    const magic = getMagicSkills();
    const stealth = getStealthSkills();

    const skills = {
      combat,
      magic,
      stealth
    };

    this.staticPlayer$.update({ skills });
  }

  public seedRaces() {
    const races = getRaces();

    this.staticPlayer$.update({ races });
  }
}