import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderSeasonsComponent } from './render-seasons.component';

describe('RenderSeasonsComponent', () => {
  let component: RenderSeasonsComponent;
  let fixture: ComponentFixture<RenderSeasonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenderSeasonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RenderSeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
