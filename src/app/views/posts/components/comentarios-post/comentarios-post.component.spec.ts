import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosPostComponent } from './comentarios-post.component';

describe('ComentariosPostComponent', () => {
  let component: ComentariosPostComponent;
  let fixture: ComponentFixture<ComentariosPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariosPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
