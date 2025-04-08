import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchersComponent } from './searchers.component';

describe('SearchersComponent', () => {
  let component: SearchersComponent;
  let fixture: ComponentFixture<SearchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
