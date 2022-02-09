import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfSplitFormComponent } from './pdf-split-form.component';

describe('PdfSplitFormComponent', () => {
  let component: PdfSplitFormComponent;
  let fixture: ComponentFixture<PdfSplitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfSplitFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfSplitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
