import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibroListComponent } from './libro-list.component';

describe('LibroListComponent', () => {
  let component: LibroListComponent;
  let fixture: ComponentFixture<LibroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibroListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibroListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
