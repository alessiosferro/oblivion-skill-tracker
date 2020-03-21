import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private FireStore: AngularFirestore
  ) { }

  getCharacters$() {
    this.FireStore.collection('players').valueChanges().subscribe(console.log);
  }

  storeCharacter(character) {

  }
}