import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBranchListComponent } from './home-branch-list.component';

describe('HomeBranchListComponent', () => {
  let component: HomeBranchListComponent;
  let fixture: ComponentFixture<HomeBranchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBranchListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBranchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
