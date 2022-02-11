import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfExtractFormComponent } from './pdf-extract-form.component';

describe('PdfExtractFormComponent', () => {
  let component: PdfExtractFormComponent;
  let fixture: ComponentFixture<PdfExtractFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfExtractFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfExtractFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
