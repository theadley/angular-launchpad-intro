import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipesComponent } from './custom-pipes.component';

describe('CustomPipesComponent', () => {
  let component: CustomPipesComponent;
  let fixture: ComponentFixture<CustomPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomPipesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
