import { Character } from '../../../core/model/character.model';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input()
  character: Character;

  @Output()
  exit = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
