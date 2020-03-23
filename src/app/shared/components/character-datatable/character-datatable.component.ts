import { Observable } from 'rxjs';
import { Component, Input, Output, EventEmitter, TemplateRef, ViewContainerRef } from '@angular/core';
import { Character } from 'src/app/core/model/character.model';

export interface RemoveConfirm {
  characterId: number;
  isConfirmed: boolean;
  container: ViewContainerRef;
}

export interface ContainerTemplate {
  container: ViewContainerRef;
  template: TemplateRef<void>;
}

@Component({
  selector: 'app-character-datatable',
  templateUrl: './character-datatable.component.html',
  styleUrls: ['./character-datatable.component.scss']
})
export class CharacterDatatableComponent {
  @Input()
  characters$: Observable<Character[]>

  @Output()
  displayDetail = new EventEmitter<Character>();

  @Output()
  characterRemove = new EventEmitter<number>();

  @Output()
  remove = new EventEmitter<number>();

  public onConfirmRemove({
    characterId,
    isConfirmed,
    container
  }: RemoveConfirm) {
    if (isConfirmed) {
      this.remove.emit(characterId);
    }

    container.clear();
  }

  public onCharacterRemove({
    container,
    template
  }: ContainerTemplate) {
    container.clear();
    container.createEmbeddedView(template);
  }
}
