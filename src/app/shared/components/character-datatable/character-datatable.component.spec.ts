import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDatatableComponent } from './character-datatable.component';

describe('CharacterDatatableComponent', () => {
  let component: CharacterDatatableComponent;
  let fixture: ComponentFixture<CharacterDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
