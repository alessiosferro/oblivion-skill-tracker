import { Skill } from './skill.model';

export interface Character {
  id: string;
  name: string;
  level: number;
  major: Skill[];
  minor: Skill[];
  gender: "male" | "female";
}