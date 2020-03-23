export interface Skill {
  name: string;
  attribute: string;
  level?: number;
}

export interface Skills {
  combat: Skill[];
  magic: Skill[];
  stealth: Skill[];
}