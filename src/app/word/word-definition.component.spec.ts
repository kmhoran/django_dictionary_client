import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordDefinitionComponent } from './word-definition.component';

describe('WordDefinitionComponent', () => {
  let component: WordDefinitionComponent;
  let fixture: ComponentFixture<WordDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
