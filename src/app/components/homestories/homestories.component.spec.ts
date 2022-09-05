import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestoriesComponent } from './homestories.component';

describe('HomestoriesComponent', () => {
  let component: HomestoriesComponent;
  let fixture: ComponentFixture<HomestoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomestoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomestoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
