import { Skills } from './skill.model';

export interface Character {
  name: string;
  level: number;
  skills: Skills;
}