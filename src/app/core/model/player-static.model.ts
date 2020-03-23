import { Attributes } from './attributes.model';
import { Skills } from './skill.model';
import { Races } from './races.model';

export interface PlayerStatic {
  races: Races;
  skills: Skills;
  attributes: Attributes;
}