import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfMergeFormComponent } from './pdf-merge-form.component';

describe('PdfMergeFormComponent', () => {
  let component: PdfMergeFormComponent;
  let fixture: ComponentFixture<PdfMergeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfMergeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfMergeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
