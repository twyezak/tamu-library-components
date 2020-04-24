import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TamuFooterComponent } from './tl-footer.component';

describe('TlFooterComponent', () => {
  let component: TamuFooterComponent;
  let fixture: ComponentFixture<TamuFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TamuFooterComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents()
      .catch(err => { console.error(err); });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TamuFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it("should have as backgroundColor 'var(--tl-primary)'", () => {
    expect(component.backgroundColor)
      .toEqual('var(--tl-primary)');
  });

});
